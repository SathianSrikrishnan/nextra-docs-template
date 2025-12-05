import React from 'react';
import { Challenge as ChallengeType } from '../data/types';

interface ChallengeProps {
  challenge: ChallengeType;
}

export const Challenge: React.FC<ChallengeProps> = ({ challenge }) => {
  const getCardClass = () => {
    switch (challenge.type) {
      case 'math':
        return 'challenge-card';
      case 'hidden-object':
        return 'hidden-object-card';
      case 'treasure-hunt':
        return 'treasure-hunt-card';
      default:
        return 'challenge-card';
    }
  };

  const getIcon = () => {
    switch (challenge.type) {
      case 'math':
        return '🧮';
      case 'hidden-object':
        return '🔍';
      case 'treasure-hunt':
        return '🗺️';
      default:
        return '✨';
    }
  };

  const getAccentColor = () => {
    switch (challenge.type) {
      case 'math':
        return 'text-sunset-600';
      case 'hidden-object':
        return 'text-sky-600';
      case 'treasure-hunt':
        return 'text-forest-600';
      default:
        return 'text-lavender-600';
    }
  };

  return (
    <div className={`${getCardClass()} my-6 animate-float`}>
      <div className={`font-display font-bold text-xl mb-3 ${getAccentColor()}`}>
        {challenge.title || `${getIcon()} Challenge Time!`}
      </div>
      
      <p className="font-story text-gray-700 text-lg leading-relaxed mb-4">
        {challenge.description}
      </p>

      {challenge.items && challenge.items.length > 0 && (
        <ul className="space-y-2 mb-4">
          {challenge.items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 font-story text-gray-600"
            >
              <span className="text-lg">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {challenge.hint && (
        <div className="mt-4 p-3 bg-white/50 rounded-xl border-2 border-dashed border-gray-300">
          <p className="font-story text-sm text-gray-500 italic">
            💡 <span className="font-semibold">Hint:</span> {challenge.hint}
          </p>
        </div>
      )}

      <div className="mt-4 text-center">
        <span className="inline-block px-4 py-2 bg-white/70 rounded-full font-display font-semibold text-gray-600 text-sm">
          ✏️ Write your answer in your notebook!
        </span>
      </div>
    </div>
  );
};

export default Challenge;

