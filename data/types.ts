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

export interface ColorTheme {
  bg: string;
  text: string;
  accent: string;
  button: string;
}

export interface SeasonInfo {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
  colorTheme: ColorTheme;
}

export const SEASONS: SeasonInfo[] = [
  {
    id: 'spring',
    name: 'Spring',
    emoji: '🌸',
    color: 'forest',
    gradient: 'bg-spring',
    description: 'New beginnings bloom in the enchanted forest',
    colorTheme: {
      bg: 'bg-green-50',
      text: 'text-green-900',
      accent: 'bg-green-400',
      button: 'bg-green-500 hover:bg-green-600',
    }
  },
  {
    id: 'summer',
    name: 'Summer',
    emoji: '☀️',
    color: 'sunset',
    gradient: 'bg-summer',
    description: 'Adventures under the warm golden sun',
    colorTheme: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-900',
      accent: 'bg-yellow-400',
      button: 'bg-yellow-500 hover:bg-yellow-600',
    }
  },
  {
    id: 'fall',
    name: 'Fall',
    emoji: '🍂',
    color: 'sunset',
    gradient: 'bg-fall',
    description: 'Mysteries unfold among the dancing leaves',
    colorTheme: {
      bg: 'bg-orange-50',
      text: 'text-orange-900',
      accent: 'bg-orange-400',
      button: 'bg-orange-500 hover:bg-orange-600',
    }
  },
  {
    id: 'winter',
    name: 'Winter',
    emoji: '❄️',
    color: 'lavender',
    gradient: 'bg-winter',
    description: 'Magic sparkles in the frosty wonderland',
    colorTheme: {
      bg: 'bg-sky-50',
      text: 'text-sky-900',
      accent: 'bg-sky-400',
      button: 'bg-sky-500 hover:bg-sky-600',
    }
  },
];
