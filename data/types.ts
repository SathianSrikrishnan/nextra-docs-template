export type ChallengeType = 'math' | 'hidden-object' | 'treasure-hunt';

export interface Challenge {
  type: ChallengeType;
  title: string;
  description: string;
  items?: string[]; // For hidden object lists
  hint?: string;
}

export interface StoryPage {
  id: number;
  text: string;
  image?: string; // Optional - some pages are text-only
  challenge?: Challenge;
}

export interface Story {
  id: string;
  title: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  description: string;
  coverImage: string;
  pages: StoryPage[];
  characters: string[];
}

export interface SeasonInfo {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
}

export const SEASONS: SeasonInfo[] = [
  {
    id: 'spring',
    name: 'Spring',
    emoji: '🌸',
    color: 'forest',
    gradient: 'bg-spring',
    description: 'New beginnings bloom in the enchanted forest',
  },
  {
    id: 'summer',
    name: 'Summer',
    emoji: '☀️',
    color: 'sunset',
    gradient: 'bg-summer',
    description: 'Adventures under the warm golden sun',
  },
  {
    id: 'fall',
    name: 'Fall',
    emoji: '🍂',
    color: 'sunset',
    gradient: 'bg-fall',
    description: 'Mysteries unfold among the dancing leaves',
  },
  {
    id: 'winter',
    name: 'Winter',
    emoji: '❄️',
    color: 'lavender',
    gradient: 'bg-winter',
    description: 'Magic sparkles in the frosty wonderland',
  },
];

