import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Story, SeasonInfo } from '../data/types';
import { StoryPage } from './StoryPage';

interface StoryViewerProps {
  story: Story;
  seasonInfo: SeasonInfo;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ story, seasonInfo }) => {
  // Initialize state from localStorage if available, otherwise default to 0
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    const savedPage = localStorage.getItem(`story-progress-${story.id}`);
    if (savedPage) {
      setCurrentPageIndex(parseInt(savedPage, 10));
    }
  }, [story.id]);

  // Save progress whenever page changes
  useEffect(() => {
    localStorage.setItem(`story-progress-${story.id}`, currentPageIndex.toString());
  }, [currentPageIndex, story.id]);

  const currentPage = story.pages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === story.pages.length - 1;
  const progress = ((currentPageIndex + 1) / story.pages.length) * 100;

  // Confetti effect on last page
  useEffect(() => {
    if (isLastPage && !showConfetti) {
      setShowConfetti(true);
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: seasonInfo.colorTheme.bg.includes('sky') ? ['#60A5FA', '#FCD34D'] : ['#F87171', '#FBBF24']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: seasonInfo.colorTheme.bg.includes('sky') ? ['#60A5FA', '#FCD34D'] : ['#F87171', '#FBBF24']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isLastPage, showConfetti, seasonInfo.colorTheme.bg]);

  const goToNextPage = useCallback(() => {
    if (!isLastPage) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isLastPage]);

  const goToPrevPage = useCallback(() => {
    if (!isFirstPage) {
      setCurrentPageIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isFirstPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  return (
    <div className={`min-h-screen flex flex-col ${seasonInfo.colorTheme.bg}`}>
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/seasons-of-wonder"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-display font-bold text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Home
          </Link>
          
          <div className="text-center">
            <h1 className={`font-display font-extrabold text-lg md:text-xl ${seasonInfo.colorTheme.text}`}>
              {story.title}
            </h1>
          </div>

          <div className="w-16 text-right font-display text-xs font-bold text-gray-400">
            {currentPageIndex + 1} / {story.pages.length}
          </div>
        </div>
        
        {/* Magical Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100/50">
          <motion.div 
            className={`h-full ${seasonInfo.colorTheme.accent} rounded-r-full`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Main Story Content */}
      <main className="flex-grow pt-20 pb-24 px-4 md:px-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StoryPage 
                page={currentPage} 
                totalPages={story.pages.length}
                onNext={isLastPage ? undefined : goToNextPage}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-white/50 pb-safe pt-4 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4 mb-2">
          {/* Previous Button */}
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={`
              flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl font-display font-bold text-lg transition-all transform active:scale-95
              ${isFirstPage 
                ? 'opacity-0 pointer-events-none' 
                : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 shadow-sm hover:shadow-md'
              }
            `}
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Middle Status / Dad Heart */}
          <div className="hidden md:flex flex-col items-center justify-center">
             <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Reading with Dad</div>
             <div className="text-red-400 animate-pulse">❤️</div>
          </div>

          {/* Next / Finish Button */}
          {isLastPage ? (
             <Link
              href="/seasons-of-wonder"
              className={`
                flex-[2] flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl font-display font-bold text-lg text-white shadow-lg transform hover:scale-[1.02] active:scale-95 transition-all
                bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-200
              `}
            >
              <span>Finish Adventure!</span>
              <span className="text-2xl">🎉</span>
            </Link>
          ) : (
            <button
              onClick={goToNextPage}
              className={`
                flex-[2] flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl font-display font-bold text-lg shadow-lg transform hover:scale-[1.02] active:scale-95 transition-all
                ${seasonInfo.colorTheme.button}
              `}
            >
              <span>Next Page</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        <div className="text-center pb-2 md:hidden">
           <span className="text-[10px] text-gray-400 font-display font-medium">Made with ❤️ by Dad</span>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
