import React from 'react';
import Image from 'next/image';
import { StoryPage as StoryPageType } from '../data/types';
import { Challenge } from './Challenge';

interface StoryPageProps {
  page: StoryPageType;
  seasonGradient: string;
  totalPages: number;
}

export const StoryPage: React.FC<StoryPageProps> = ({ 
  page, 
  seasonGradient,
  totalPages 
}) => {
  // Check if this page is text-only (no image)
  const isTextOnly = !page.image;

  return (
    <div className={`story-page ${seasonGradient} flex flex-col ${isTextOnly ? 'justify-center' : ''} min-h-screen`}>
      {/* Image Section - Only render if image exists */}
      {page.image && (
        <div className="relative w-full h-[45vh] md:h-[50vh] flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
          <Image
            src={page.image}
            alt={`Story illustration for page ${page.id}`}
            fill
            className="object-cover"
            priority={page.id <= 3}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Text Content */}
      <div className={`flex-1 px-6 py-8 md:px-8 overflow-y-auto flex flex-col ${isTextOnly ? 'items-center justify-center text-center' : ''}`}>
        <div className="max-w-2xl mx-auto w-full">
          {/* Page number */}
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-display text-gray-500 shadow-sm">
              Page {page.id} of {totalPages}
            </span>
          </div>

          {/* Decorative Icon for Text-Only Pages */}
          {isTextOnly && !page.challenge && (
            <div className="text-4xl mb-6 animate-float opacity-80">
              ✨
            </div>
          )}

          {/* Story text */}
          <div className={`story-text text-gray-800 space-y-6 ${isTextOnly ? 'text-xl md:text-2xl font-medium' : 'text-lg text-center md:text-left'}`}>
            {page.text.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed drop-shadow-sm">{paragraph}</p>
            ))}
          </div>

          {/* Challenge component if present */}
          {page.challenge && (
            <div className="mt-8">
              <Challenge challenge={page.challenge} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;

