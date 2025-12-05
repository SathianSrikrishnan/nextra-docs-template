import { Story } from '../types';

export const summerStory: Story = {
  id: 'summer',
  title: 'The Sun Festival Mystery',
  season: 'summer',
  description: 'Luna and Pip must solve riddles and find hidden treasures before the magical Sun Festival can begin.',
  coverImage: '/images/summer/cover.png',
  characters: ['Luna the Fox', 'Pip the Bluebird', 'Sage the Owl', 'Fern the Deer'],
  pages: [
    {
      id: 1,
      text: 'The summer sun blazed bright and warm over the Whispering Woods. Luna stretched lazily in a patch of golden light, her Spring Crystal glowing softly at her neck.',
      image: '/images/summer/cover.png',
    },
    {
      id: 2,
      text: '"Luna! Luna!" Pip zoomed down excitedly. "The Sun Festival is in three days! But there\'s a problem - someone has hidden all the Festival Flames!"',
      image: '/images/summer/page-2.png',
    },
    {
      id: 3,
      text: 'The Festival Flames were magical lanterns that made the Sun Festival glow with wonder. Without them, the celebration couldn\'t happen.',
      image: '/images/summer/page-3.png',
    },
    {
      id: 4,
      text: 'A graceful deer emerged from the trees. "I am Fern," she said softly. "I saw something strange last night. Someone left clues hidden throughout the forest."',
      image: '/images/summer/page-4.png',
    },
    {
      id: 5,
      text: '"It sounds like a game!" Luna\'s eyes sparkled. "Let\'s find those clues and recover the Festival Flames!"',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'There are 72 Festival Flames hidden throughout the forest. The clues say they are divided equally among 8 hiding spots. How many flames are at each hiding spot? Show your work!',
        hint: 'Division is like sharing equally. 72 ÷ 8 = ?',
      },
    },
    {
      id: 6,
      text: '"Nine flames at each spot!" Luna calculated. "We need to find all eight hiding places."',
      image: '/images/summer/page-6.png',
    },
    {
      id: 7,
      text: 'The first clue was carved into a sunflower: "Where bees make gold and bears dream of sweetness, there you\'ll find flames that bring brightness."',
      image: '/images/summer/page-7.png',
    },
    {
      id: 8,
      text: '"The honey tree!" Fern exclaimed. They raced to the ancient oak where wild bees had built their hive.',
      image: '/images/summer/page-5.png',
    },
    {
      id: 9,
      text: 'Sure enough, nine golden flames sat in the hollow of the tree, glowing warmly. Inside was another clue.',
      image: '/images/summer/page-9.png',
      challenge: {
        type: 'hidden-object',
        title: '🔍 Hidden Object Challenge!',
        description: 'Before taking the flames, look carefully at this summer forest scene. Find these hidden items:',
        items: [
          '5 different types of butterflies',
          'A sleeping bear behind the bushes',
          'The next clue scroll (rolled paper)',
          '2 honeycombs hidden in unusual places',
          'A rainbow hiding in the waterfall mist',
          'The letter "F" formed by tree branches',
        ],
        hint: 'Summer scenes are full of life! Look in sunny spots and shady corners.',
      },
    },
    {
      id: 10,
      text: 'The scroll read: "Count the fireflies at midnight\'s edge, add them to the stars you pledge. The number tells you where to go - where cool waters gently flow."',
      image: '/images/summer/page-10.png',
    },
    {
      id: 11,
      text: 'Pip thought carefully. "Last night I counted 34 fireflies at the forest edge, and we made a wish on 17 stars!"',
      image: '/images/summer/page-11.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'Pip counted 34 fireflies and 17 stars. What is 34 + 17? The answer tells you which rock at the river to check! Write your addition work neatly.',
        hint: 'Remember: when adding, start with the ones column first!',
      },
    },
    {
      id: 12,
      text: '"Fifty-one! We need to find rock number fifty-one at the Singing River!" Luna bounded off with her friends following.',
      image: '/images/summer/page-12.png',
    },
    {
      id: 13,
      text: 'The Singing River was beautiful in summer, its waters sparkling like liquid diamonds. They counted rocks until they found number 51.',
      image: '/images/summer/page-13.png',
    },
    {
      id: 14,
      text: 'Under the rock were nine more flames and a new clue! They were making progress.',
      image: '/images/summer/page-14.png',
    },
    {
      id: 15,
      text: '"This is so much fun!" Fern said. "I\'ve never explored the forest like this before. Every corner has a surprise! I wonder what treasures our friends at home can find in their own world?"',
      image: '/images/summer/page-9.png',
      challenge: {
        type: 'treasure-hunt',
        title: '🗺️ Real World Quest!',
        description: 'Luna and her friends are exploring nature! YOUR mission: Find something in nature near your home - a special leaf, a pretty rock, or an interesting stick. Draw a picture of what you found in your notebook!',
        hint: 'Look carefully at the details. What colors do you see? What shape is it?',
      },
    },
    {
      id: 16,
      text: 'By afternoon, they had found six hiding spots. The clues were getting trickier, but the friends worked together.',
      image: '/images/summer/page-16.png',
    },
    {
      id: 17,
      text: 'The seventh clue led them to the Sunflower Field, where flowers stood tall as trees and bees hummed their busy songs.',
      image: '/images/summer/page-7.png',
    },
    {
      id: 18,
      text: '"But which sunflower?" Pip flew in circles. "There must be hundreds!"',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The clue says: "Find the sunflower that is 95 - 47 steps from the old fence." How many steps must they walk? Show your subtraction work!',
        hint: 'When subtracting, you might need to borrow from the tens!',
      },
    },
    {
      id: 19,
      text: '"Forty-eight steps!" They counted together, and at step 48 stood the tallest sunflower with nine flames nestled at its base.',
      image: '/images/summer/page-11.png',
    },
    {
      id: 20,
      text: 'The final clue was the hardest: "Return to where your spring adventure ended, where colored waters have befriended."',
      image: '/images/summer/page-20.png',
    },
    {
      id: 21,
      text: '"Rainbow Pond!" Luna realized. "That\'s where we found the Spring Crystal!" They raced back to the magical pond.',
      image: '/images/summer/page-7.png',
    },
    {
      id: 22,
      text: 'Sage was waiting for them, his eyes twinkling with pride. "You solved every riddle. But tell me - what did you learn?"',
      image: '/images/summer/page-22.png',
    },
    {
      id: 23,
      text: '"That working together makes hard things easier!" said Pip. "And that every problem has a solution if you think carefully," added Luna.',
      image: '/images/summer/page-13.png',
    },
    {
      id: 24,
      text: 'Sage nodded wisely. "Then you have earned this - the Summer Crystal. It joins with Spring to grow even stronger."',
      challenge: {
        type: 'math',
        title: '🧮 Final Summer Challenge!',
        description: 'They found 72 flames total. If they light 8 flames every hour during the festival, how many hours will the flames last? Write your division work!',
        hint: 'How many 8s fit into 72?',
      },
    },
    {
      id: 25,
      text: 'The Sun Festival was magnificent! Flames flickered, music played, and the whole forest celebrated together under the summer stars.\n\n☀️ THE END OF SUMMER ☀️\n\nContinue to Fall when the leaves begin to turn!',
      image: '/images/summer/cover.png',
    },
  ],
};

