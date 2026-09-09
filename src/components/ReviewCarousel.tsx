'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/src/types';

interface ReviewCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ReviewCarousel({
  testimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const goToSlide = (slideIndex: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex(slideIndex);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(() => nextSlide(), autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  if (!testimonials || totalSlides === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative select-none">
      <div className="relative w-full px-4 sm:px-16">
        
        {/* Track Container with Touch Gestures */}
        <div 
          className="overflow-hidden rounded-2xl bg-slate-50/50 cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 p-2 sm:p-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between h-full text-left max-w-3xl mx-auto">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      {review.date && (
                        <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic mb-6 whitespace-pre-line">
                      "{review.comment}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 font-bold text-slate-700 flex items-center justify-center text-sm shadow-2xs">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-900 leading-tight">{review.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{review.locality} &middot; {review.brandServiced}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      Google Maps Review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-30 text-2xl rounded-full p-2 sm:p-3 bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-[#0c54a0] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-30 text-2xl rounded-full p-2 sm:p-3 bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-[#0c54a0] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      
      {/* Indicator Navigation Dots & Number Below (1/14) */}
      <div className="mt-6 flex flex-col items-center gap-4 z-10 w-full">
        <div className="flex gap-2 flex-wrap justify-center w-full max-w-[80vw]">
          {testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={(e) => goToSlide(slideIndex, e)}
              type="button"
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === slideIndex ? 'w-8 bg-[#0c54a0]' : 'w-2.5 bg-slate-300 hover:bg-slate-400 cursor-pointer'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
        <div className="text-sm font-semibold text-slate-600 bg-white px-4 py-1.5 rounded-full tabular-nums tracking-wide shadow-sm border border-slate-200 inline-block">
          {currentIndex + 1} <span className="text-slate-400 mx-1">/</span> {totalSlides}
        </div>
      </div>
    </div>
  );
}
