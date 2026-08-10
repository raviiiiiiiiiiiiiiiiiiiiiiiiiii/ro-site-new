import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { renderPageContent } from "./src/serverRender";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Explicit SEO routes
  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
  });

  app.get("/llms.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile(path.join(process.cwd(), "public", "llms.txt"));
  });

  // Serve static public assets explicitly
  app.use(express.static(path.join(process.cwd(), "public")));

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      if (req.originalUrl.includes(".") && !req.originalUrl.endsWith(".html")) {
        return next();
      }

      try {
        const urlHost = req.headers.host || "roservice24x7.in";
        const { title, metaDescription, canonicalUrl, jsonLd, bodyHtml } = renderPageContent(req.originalUrl, urlHost);

        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);

        const jsonLdScripts = jsonLd
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
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    app.get("*", (req, res, next) => {
      if (req.originalUrl.includes(".") && !req.originalUrl.endsWith(".html")) {
        return next();
      }

      try {
        const urlHost = req.headers.host || "roservice24x7.in";
        const { title, metaDescription, canonicalUrl, jsonLd, bodyHtml } = renderPageContent(req.originalUrl, urlHost);

        let template = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");

        const jsonLdScripts = jsonLd
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
        next(e);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
