import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Story, SeasonInfo } from '../data/types';

interface SeasonCardProps {
  story: Story;
  seasonInfo: SeasonInfo;
  index: number;
}

export const SeasonCard: React.FC<SeasonCardProps> = ({ story, seasonInfo, index }) => {
  const getSeasonColors = () => {
    switch (story.season) {
      case 'spring':
        return {
          bg: 'from-green-100 to-yellow-100',
          border: 'border-green-300',
          text: 'text-green-700',
          button: 'bg-green-500 hover:bg-green-600',
        };
      case 'summer':
        return {
          bg: 'from-yellow-100 to-blue-100',
          border: 'border-yellow-300',
          text: 'text-yellow-700',
          button: 'bg-yellow-500 hover:bg-yellow-600',
        };
      case 'fall':
        return {
          bg: 'from-orange-100 to-red-100',
          border: 'border-orange-300',
          text: 'text-orange-700',
          button: 'bg-orange-500 hover:bg-orange-600',
        };
      case 'winter':
        return {
          bg: 'from-blue-100 to-purple-100',
          border: 'border-blue-300',
          text: 'text-blue-700',
          button: 'bg-blue-500 hover:bg-blue-600',
        };
      default:
        return {
          bg: 'from-gray-100 to-gray-200',
          border: 'border-gray-300',
          text: 'text-gray-700',
          button: 'bg-gray-500 hover:bg-gray-600',
        };
    }
  };

  const colors = getSeasonColors();

  return (
    <Link href={`/seasons-of-wonder/${story.id}`}>
      <div 
        className={`
          group relative overflow-hidden rounded-3xl 
          bg-gradient-to-br ${colors.bg} 
          border-4 ${colors.border}
          shadow-lg hover:shadow-2xl 
          transform hover:scale-[1.02] 
          transition-all duration-300 ease-out
          cursor-pointer
        `}
        style={{ 
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Season Emoji Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-4xl drop-shadow-lg animate-float" style={{ animationDelay: `${index * 200}ms` }}>
            {seasonInfo.emoji}
          </span>
        </div>

        {/* Cover Image Area */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Season Label */}
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-display font-bold ${colors.text} bg-white/60 mb-3`}>
            {seasonInfo.name}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl md:text-2xl text-gray-800 mb-2 group-hover:text-gray-900">
            {story.title}
          </h3>

          {/* Description */}
          <p className="font-story text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
            {story.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              📖 {story.pages.length} pages
            </span>
            <span className="flex items-center gap-1">
              ✨ {story.characters.length} characters
            </span>
          </div>

          {/* Read Button */}
          <div className={`
            w-full py-3 px-4 rounded-xl 
            ${colors.button} 
            text-white font-display font-bold text-center
            transform group-hover:scale-105 transition-transform duration-200
            shadow-md group-hover:shadow-lg
          `}>
            Begin Adventure →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SeasonCard;

