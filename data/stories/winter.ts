import { Story } from '../types';

export const winterStory: Story = {
  id: 'winter',
  title: 'The Crystal Guardian',
  season: 'winter',
  description: 'As snow blankets the Whispering Woods, Luna must unite all four crystals to awaken the ancient Guardian and save the forest.',
  coverImage: '/images/winter/cover.png',
  characters: ['Luna the Fox', 'Pip the Bluebird', 'Sage the Owl', 'Fern the Deer', 'Bramble the Hedgehog', 'The Crystal Guardian'],
  pages: [
    {
      id: 1,
      text: 'Snow fell softly on the Whispering Woods, transforming it into a glittering wonderland. Luna\'s three crystals pulsed with growing urgency - something magical was about to happen.',
      image: '/images/winter/cover.png',
    },
    {
      id: 2,
      text: 'Sage appeared through the snowflakes, his white feathers almost invisible against the winter sky. "The time has come, Luna. The Winter Solstice is here - the longest night of the year."',
      image: '/images/winter/page-2.png',
    },
    {
      id: 3,
      text: '"On this night," Sage continued, "the ancient Crystal Guardian awakens. But only if someone worthy brings all four seasonal crystals together."',
      image: '/images/winter/page-3.png',
    },
    {
      id: 4,
      text: 'All of Luna\'s friends gathered: Pip, Fern, and Bramble. "We\'ve been with you every step," Pip chirped. "We\'ll see this through together."',
      image: '/images/winter/page-4.png',
    },
    {
      id: 5,
      text: '"But first," Sage warned, "you must find the Winter Crystal. It\'s hidden where no one would think to look - in plain sight, disguised as ordinary ice."',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'Sage gives a riddle: "I am thinking of a number. If you double it and add 15, you get 89. What is the number?" This reveals where to look!',
        hint: 'Work backwards: 89 - 15 = ?, then divide that answer by 2.',
      },
    },
    {
      id: 6,
      text: '"Thirty-seven! The 37th icicle on the Great Frozen Falls!" Luna bounded through the snow, her friends close behind.',
      image: '/images/winter/page-5.png',
    },
    {
      id: 7,
      text: 'The Great Frozen Falls was magnificent - a wall of ice sculptures created by nature itself. Icicles hung like crystal chandeliers.',
      image: '/images/winter/page-7.png',
    },
    {
      id: 8,
      text: 'They counted carefully until they reached the 37th icicle. It sparkled differently than the others - this was no ordinary ice.',
      image: '/images/winter/page-6.png',
      challenge: {
        type: 'hidden-object',
        title: '🔍 Hidden Object Challenge!',
        description: 'The frozen falls hide winter\'s secrets! Find these magical items:',
        items: [
          '6 unique snowflake patterns (each one different!)',
          'A snow owl hiding in the white',
          'The Winter Crystal disguised among icicles',
          'Ice flowers blooming on the frozen surface',
          'A sleeping snow fox curled near the base',
          'The words "BELIEVE IN MAGIC" formed by frost patterns',
          'A small door hidden in the ice (to the Guardian\'s realm)',
        ],
        hint: 'Winter hides things in whites and blues. Look for subtle differences in the frost!',
      },
    },
    {
      id: 9,
      text: 'Luna touched the 37th icicle, and it transformed in her paw - the Winter Crystal, pure white with a core of swirling silver.',
      image: '/images/winter/page-9.png',
    },
    {
      id: 10,
      text: '"Now you have all four!" Bramble squeaked excitedly. "Spring\'s green, Summer\'s gold, Fall\'s amber, and Winter\'s silver!"',
      image: '/images/winter/page-11.png',
    },
    {
      id: 11,
      text: 'But then the ground trembled. From the ice emerged a voice: "WHO DARES CLAIM THE SEASONAL CRYSTALS?"',
      image: '/images/winter/page-11.png',
    },
    {
      id: 12,
      text: 'A figure formed from snow and starlight - the Crystal Guardian, ancient and powerful. "To prove you are worthy, answer my challenges three."',
      image: '/images/winter/page-8.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The Guardian\'s first challenge: "There are 365 days in a year, and 4 seasons. If seasons were divided equally, how many days would each season have? Will there be any days left over?"',
        hint: 'Divide 365 by 4. The remainder shows leftover days!',
      },
    },
    {
      id: 13,
      text: '"91 days each, with 1 day left over!" Luna answered confidently. "That extra day is magical - like today, the Solstice!"',
      image: '/images/winter/page-13.png',
    },
    {
      id: 14,
      text: 'The Guardian nodded, impressed. "Second challenge: Throughout your journeys, you faced many tests. What did they teach you?"',
      image: '/images/winter/page-14.png',
      challenge: {
        type: 'treasure-hunt',
        title: '🗺️ Real World Quest!',
        description: 'The Guardian asks YOU: What have Luna\'s adventures taught you? In your notebook, write or draw THREE things you learned from the stories. These can be about math, nature, friendship, or anything else!',
        hint: 'Think about the problems you solved, the friends who helped, and the beautiful places you imagined.',
      },
    },
    {
      id: 15,
      text: 'Luna spoke from her heart: "I learned that every problem has a solution if you think carefully. That friends make hard journeys easier. And that every season brings its own kind of magic."',
      image: '/images/winter/page-15.png',
    },
    {
      id: 16,
      text: 'The Guardian smiled, and the coldness in its form began to warm. "Final challenge. Place your crystals and speak the truth of what you wish for the forest."',
      image: '/images/winter/page-8.png',
    },
    {
      id: 17,
      text: 'Luna arranged the four crystals in a pattern - Spring in the East, Summer in the South, Fall in the West, Winter in the North.',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'Each crystal gives off light measured in "glimmers." Spring: 23, Summer: 34, Fall: 28, Winter: 15. What is the TOTAL light when all crystals shine together?',
        hint: 'Add all four numbers: 23 + 34 + 28 + 15 = ?',
      },
    },
    {
      id: 18,
      text: '"One hundred glimmers of light!" As Luna spoke the number, the crystals began to glow and rise into the air.',
      image: '/images/winter/page-11.png',
    },
    {
      id: 19,
      text: '"I wish," Luna said clearly, "for the Whispering Woods to always be a place of wonder. Where creatures help each other, where problems are solved with thinking, and where every season brings joy."',
    },
    {
      id: 20,
      text: 'The crystals merged into a brilliant rainbow of light. The Guardian transformed from ice into pure warmth and kindness.',
      image: '/images/winter/page-11.png',
    },
    {
      id: 21,
      text: '"Luna, you and your friends have proven yourselves true Forest Champions," the Guardian declared. "Your wish is granted - for this year and all years to come."',
      image: '/images/winter/page-21.png',
    },
    {
      id: 22,
      text: 'From the merged crystals, a new jewel formed - the Forever Crystal, containing all the magic of the seasons. It settled gently around Luna\'s neck.',
      image: '/images/winter/page-13.png',
    },
    {
      id: 23,
      text: 'The Guardian faded into starlight, leaving behind a blessing: "Return each year, young champions. New adventures await those who believe."',
      image: '/images/winter/page-23.png',
    },
    {
      id: 24,
      text: 'As the sun rose on the shortest day, painting the snow pink and gold, Luna and her friends celebrated. They had done it - together.',
      image: '/images/winter/page-14.png',
      challenge: {
        type: 'math',
        title: '🧮 Final Winter Challenge!',
        description: 'You\'ve completed all 4 seasons! If each season had 5 math challenges, 3 hidden object puzzles, and 2 treasure hunts, how many total challenges did you complete? (Remember: 4 seasons!)',
        hint: 'First add challenges per season: 5 + 3 + 2 = ? Then multiply by 4 seasons!',
      },
    },
    {
      id: 25,
      text: '"What an incredible year," Pip sighed happily. "I can\'t wait to see what next year brings!"\n\nLuna smiled, the Forever Crystal warm against her fur. The Whispering Woods sparkled with magic, and she knew - the best adventures were still ahead.\n\n❄️ THE END OF WINTER ❄️\n\n✨ CONGRATULATIONS! You have completed all four seasons! ✨\n\nYou are now a true Forest Champion!',
      image: '/images/winter/cover.png',
    },
  ],
};
