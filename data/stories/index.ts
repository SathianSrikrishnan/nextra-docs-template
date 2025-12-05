import { Story } from '../types';
import { springStory } from './spring';
import { summerStory } from './summer';
import { fallStory } from './fall';
import { winterStory } from './winter';

export const stories: Record<string, Story> = {
  spring: springStory,
  summer: summerStory,
  fall: fallStory,
  winter: winterStory,
};

export const storyList: Story[] = [
  springStory,
  summerStory,
  fallStory,
  winterStory,
];

export { springStory, summerStory, fallStory, winterStory };

