import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  brandColor?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our RO repair & maintenance services in Bangalore.',
  brandColor,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const activeColor = brandColor || '#0c54a0';
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              style={isOpen ? { borderColor: `${activeColor}40` } : undefined}
              className={`rounded-[20px] transition-colors overflow-hidden border ${
                isOpen
                  ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span
                  style={isOpen ? { color: activeColor } : undefined}
                  className={`text-[17px] font-bold leading-snug ${isOpen ? '' : 'text-[#1a1a1a]'}`}
                >
                  {faq.question}
                </span>
                <span
                  style={isOpen ? { color: activeColor } : undefined}
                  className={`flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-5 pb-6 pt-0 sm:px-6 text-[15px] text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
