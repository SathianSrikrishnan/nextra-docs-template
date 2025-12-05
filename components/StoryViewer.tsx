import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Story } from '../data/types';
import { StoryPage } from './StoryPage';

interface StoryViewerProps {
  story: Story;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ story }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  // Get page from URL query if present
  useEffect(() => {
    const pageParam = router.query.page;
    if (pageParam && typeof pageParam === 'string') {
      const pageNum = parseInt(pageParam, 10) - 1;
      if (pageNum >= 0 && pageNum < story.pages.length) {
        setCurrentPage(pageNum);
      }
    }
  }, [router.query.page, story.pages.length]);

  const goToPage = useCallback((pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < story.pages.length) {
      setCurrentPage(pageIndex);
      // Update URL without full navigation
      router.push(
        { pathname: router.pathname, query: { ...router.query, page: pageIndex + 1 } },
        undefined,
        { shallow: true }
      );
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [story.pages.length, router]);

  const goNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const goPrev = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const page = story.pages[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === story.pages.length - 1;

  const getSeasonGradient = () => {
    switch (story.season) {
      case 'spring': return 'bg-spring';
      case 'summer': return 'bg-summer';
      case 'fall': return 'bg-fall';
      case 'winter': return 'bg-winter';
      default: return 'bg-spring';
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Story Page Content */}
      <StoryPage 
        page={page} 
        seasonGradient={getSeasonGradient()}
        totalPages={story.pages.length}
      />

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          {/* Previous Button */}
          <button
            onClick={goPrev}
            disabled={isFirstPage}
            className={`nav-button ${isFirstPage ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
            aria-label="Previous page"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Home Button */}
          <Link 
            href="/seasons-of-wonder"
            className="nav-button hover:scale-110"
            aria-label="Return to story selection"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {/* Next Button */}
          <button
            onClick={goNext}
            disabled={isLastPage}
            className={`nav-button ${isLastPage ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
            aria-label="Next page"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-3">
          <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/80 rounded-full transition-all duration-300"
              style={{ width: `${((currentPage + 1) / story.pages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;

