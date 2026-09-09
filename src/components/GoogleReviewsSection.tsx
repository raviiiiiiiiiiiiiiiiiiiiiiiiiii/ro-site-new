'use client';

import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_DETAILS, HOMEPAGE_TESTIMONIALS } from '@/src/data/content';
import { ReviewCarousel } from './ReviewCarousel';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="google-reviews" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Google Business Profile Header Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 mb-6 max-w-xl mx-auto">
          {/* Google 'G' Styled Graphic */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="font-bold text-slate-800 text-sm tracking-tight">Google Business Profile</span>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-slate-900 text-sm">5.0</span>
            <span className="text-xs text-slate-500 font-medium">Rating on Google Maps</span>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex items-center gap-1 text-emerald-700 text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5 fill-emerald-100 text-emerald-600" />
            <span>Verified Service</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Customer Reviews on Google Maps
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8">
          Read genuine feedback from homeowners and families across Mansarovar, Ganpati Nagar, and Jaipur who trust our doorstep RO water purifier servicing.
        </p>

        {/* Carousel Component */}
        <div className="mb-10">
          <ReviewCarousel testimonials={HOMEPAGE_TESTIMONIALS} />
        </div>

        {/* View on Google Maps Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={BUSINESS_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all hover:shadow-md active:scale-95"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>View Profile on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={BUSINESS_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0c54a0] hover:bg-[#09417d] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <MessageSquareQuote className="w-4 h-4 shrink-0" />
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
