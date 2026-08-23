import express from "express";
import path from "path";
import fs from "fs";
import { renderPageContent } from "./src/serverRender";

export const app = express();
const PORT = 3000;

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Explicit SEO routes
app.get("/robots.txt", (req, res) => {
  const robotsPath = path.join(process.cwd(), "public", "robots.txt");
  if (fs.existsSync(robotsPath)) {
    return res.sendFile(robotsPath);
  }
  res.type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://www.roservicehelpline.in/sitemap.xml\n");
});

app.get("/sitemap.xml", (req, res) => {
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    res.type("application/xml");
    return res.sendFile(sitemapPath);
  }
  res.status(404).end();
});

app.get("/llms.txt", (req, res) => {
  const llmsPath = path.join(process.cwd(), "public", "llms.txt");
  if (fs.existsSync(llmsPath)) {
    res.type("text/plain");
    return res.sendFile(llmsPath);
  }
  res.status(404).end();
});

// Serve static public assets explicitly
app.use(express.static(path.join(process.cwd(), "public")));

// Dist static assets in production
const distPath = path.join(process.cwd(), "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

function getIndexHtmlTemplate(): string {
  const distHtmlPath = path.join(process.cwd(), "dist", "index.html");
  if (fs.existsSync(distHtmlPath)) {
    return fs.readFileSync(distHtmlPath, "utf-8");
  }
  const rootHtmlPath = path.join(process.cwd(), "index.html");
  if (fs.existsSync(rootHtmlPath)) {
    return fs.readFileSync(rootHtmlPath, "utf-8");
  }
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ro-service helpline</title></head><body><div id="root"></div></body></html>`;
}

function handleSSRRequest(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.originalUrl.includes(".") && !req.originalUrl.endsWith(".html")) {
    return next();
  }

  let template = "";
  try {
    template = getIndexHtmlTemplate();
  } catch {
    template = `<!doctype html><html lang="en"><head><meta charset="UTF-8" /><title>Ro-service helpline</title></head><body><div id="root"></div></body></html>`;
  }

  try {
    const urlHost = (req.headers["x-forwarded-host"] as string) || req.headers.host || "roservicehelpline.in";
    const { title, metaDescription, canonicalUrl, jsonLd, bodyHtml } = renderPageContent(req.originalUrl, urlHost);

    const jsonLdScripts = (jsonLd || [])
      .map((data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`)
      .join("\n    ");

    const seoHeadTags = `
    <title>${title}</title>
    <meta name="description" content="${metaDescription}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${metaDescription}" />
    ${jsonLdScripts}
    `;

    let rendered = template;
    if (rendered.includes("<title>")) {
      rendered = rendered.replace(/<title>.*?<\/title>/i, seoHeadTags);
    } else {
      rendered = rendered.replace("</head>", `${seoHeadTags}\n</head>`);
    }

    if (rendered.includes('<div id="root"></div>')) {
      rendered = rendered.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
    } else if (rendered.includes('<div id="root">')) {
      rendered = rendered.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${bodyHtml}</div>`);
    }

    res.status(200).set({ "Content-Type": "text/html" }).end(rendered);
  } catch (err) {
    console.error("SSR rendering error, serving fallback static HTML:", err);
    res.status(200).set({ "Content-Type": "text/html" }).end(template);
  }
}

// Development vs Production
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  // Vite dev middleware for local development
  import("vite").then(async ({ createServer }) => {
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      if (req.originalUrl.includes(".") && !req.originalUrl.endsWith(".html")) {
        return next();
      }

      try {
        const urlHost = (req.headers["x-forwarded-host"] as string) || req.headers.host || "roservicehelpline.in";
        const { title, metaDescription, canonicalUrl, jsonLd, bodyHtml } = renderPageContent(req.originalUrl, urlHost);

        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);

        const jsonLdScripts = (jsonLd || [])
          .map((data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`)
          .join("\n    ");

        const seoHeadTags = `
    <title>${title}</title>
    <meta name="description" content="${metaDescription}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${metaDescription}" />
    ${jsonLdScripts}
        `;

        template = template.replace(/<title>.*?<\/title>/i, seoHeadTags);
        template = template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        try {
          const fallback = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
          res.status(200).set({ "Content-Type": "text/html" }).end(fallback);
        } catch {
          next(e);
        }
      }
    });
  });
} else {
  // Production SSR route handler
  app.get("*", handleSSRRequest);
}

// Start standalone server when not in serverless environment
if (!process.env.VERCEL) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

export default app;

