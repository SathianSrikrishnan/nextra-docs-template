import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StoryPage as StoryPageType } from '../data/types';
import { Challenge } from './Challenge';

interface StoryPageProps {
  page: StoryPageType;
  totalPages: number;
  onNext?: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ 
  page, 
  totalPages,
  onNext
}) => {
  // Check if this page is text-only (no image)
  const isTextOnly = !page.image;

  return (
    <div className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col ${isTextOnly ? 'min-h-[60vh] justify-center' : ''}`}>
      
      {/* Image Section - Only render if image exists */}
      {page.image && (
        <div className="relative w-full h-[40vh] md:h-[55vh] flex-shrink-0 group">
          <Image
            src={page.image}
            alt={`Story illustration for page ${page.id}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={page.id <= 2}
            onError={(e) => {
              // Hide broken images safely
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
            }}
          />
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        </div>
      )}

      {/* Content Section */}
      <div className={`
        flex-1 px-6 py-8 md:px-10 flex flex-col relative
        ${isTextOnly ? 'items-center justify-center text-center' : ''}
      `}>
        
        {/* Page number badge */}
        <div className={`
          ${isTextOnly ? 'mb-8' : 'absolute top-4 right-4 z-10'}
        `}>
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-display font-bold text-gray-500 shadow-sm border border-gray-100">
            Page {page.id} of {totalPages}
          </span>
        </div>

        {/* Decorative elements for text-only pages */}
        {isTextOnly && !page.challenge && (
          <div className="mb-6 text-4xl animate-bounce-slow opacity-80">
            ✨
          </div>
        )}

        {/* Story Text */}
        <div className={`
          max-w-2xl mx-auto w-full
          ${isTextOnly ? 'text-xl md:text-2xl leading-relaxed font-medium text-gray-800' : 'text-lg leading-relaxed text-gray-700'}
        `}>
          {page.text.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
            <p key={idx} className="mb-4 last:mb-0 font-story drop-shadow-sm">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Challenge Section */}
        {page.challenge && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-full max-w-2xl mx-auto"
          >
            <Challenge challenge={page.challenge} />
          </motion.div>
        )}

        {/* Next button for text-only pages to encourage flow */}
        {isTextOnly && onNext && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-8 px-8 py-3 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-full font-display font-bold transition-colors"
          >
            Continue Journey ➜
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default StoryPage;
