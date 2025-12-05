import { Story } from '../types';

export const springStory: Story = {
  id: 'spring',
  title: 'The Awakening Garden',
  season: 'spring',
  description: 'Luna the fox and Pip the bluebird discover the first signs of spring in their enchanted forest home.',
  coverImage: '/images/spring/cover.png',
  characters: ['Luna the Fox', 'Pip the Bluebird', 'Sage the Owl'],
  pages: [
    {
      id: 1,
      text: "Deep in the heart of the Whispering Woods, where morning dew sparkled like tiny diamonds, a young fox named Luna stretched and yawned. Winter's long sleep was finally over.",
      image: '/images/spring/page-1.png',
    },
    {
      id: 2,
      text: '"Good morning, Luna!" chirped Pip the bluebird from a branch above. "Have you seen it? Spring has arrived! The first flowers are blooming by the old oak tree!"',
      image: '/images/spring/page-2.png',
    },
    {
      id: 3,
      text: 'Luna bounded through the forest, her russet fur catching the golden sunlight filtering through new green leaves. Everything smelled fresh and alive.',
      image: '/images/spring/page-3.png',
    },
    {
      id: 4,
      text: 'At the old oak tree, they found something magical: a patch of purple crocuses pushing through the last bits of snow. "The Forest Guardians left us a gift!" gasped Luna.',
      image: '/images/spring/page-4.png',
    },
    {
      id: 5,
      text: 'Wise old Sage the Owl hooted from above. "These flowers hold a secret, young ones. Count them carefully, and you shall discover the first clue to spring\'s greatest treasure."',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'Luna counted 23 purple crocuses on one side of the tree. Pip found 38 more crocuses on the other side. How many crocuses did they find altogether? Write your work in your notebook!',
        hint: 'Remember to line up your numbers carefully when adding!',
      },
    },
    {
      id: 6,
      text: '"Sixty-one crocuses!" Luna exclaimed. "That must mean something. Sage, what is spring\'s greatest treasure?"',
      image: '/images/spring/page-6.png',
    },
    {
      id: 7,
      text: 'Sage\'s golden eyes twinkled. "The treasure is hidden where water meets stone, where rainbow fish dance, and where the willow weeps with joy."',
      image: '/images/spring/page-7.png',
    },
    {
      id: 8,
      text: '"The Rainbow Pond!" Pip and Luna said together. They raced through the awakening forest, past budding trees and buzzing bees.',
      image: '/images/spring/page-8.png',
    },
    {
      id: 9,
      text: 'The path to Rainbow Pond wound through a meadow filled with wildflowers. Luna stopped suddenly. "Wait, Pip! Look at this amazing scene. Something is hidden here..."',
      image: '/images/spring/page-9.png',
      challenge: {
        type: 'hidden-object',
        title: '🔍 Hidden Object Challenge!',
        description: 'Look very carefully at this meadow scene. Can you find ALL of these hidden items?',
        items: [
          '3 tiny ladybugs hiding on flower petals',
          'A golden key camouflaged in the grass',
          'The letter "S" formed by curving stems',
          'A sleeping caterpillar on a leaf',
          'A four-leaf clover among the three-leaf ones',
        ],
        hint: 'Take your time! Write down where you found each one in your notebook.',
      },
    },
    {
      id: 10,
      text: '"You found the golden key!" Pip cheered. "The Forest Guardians hid it there to test the truly observant ones."',
      image: '/images/spring/page-10.png',
    },
    {
      id: 11,
      text: 'They continued on their journey. The forest was waking up everywhere - squirrels chattered, rabbits hopped, and butterflies danced on the breeze.',
      image: '/images/spring/page-11.png',
    },
    {
      id: 12,
      text: 'At last, they reached Rainbow Pond. The water shimmered with colors as fish swam beneath the surface. The weeping willow tree stood guard at the shore.',
      image: '/images/spring/page-12.png',
    },
    {
      id: 13,
      text: '"But where is the treasure?" Luna wondered, looking around. Her ears perked up. "Wait! Sage said \'where water meets stone.\' Look at those stepping stones!"',
      image: '/images/spring/page-13.png',
    },
    {
      id: 14,
      text: 'There were stones leading across the pond. Each one had a number carved into it. "We need to solve another puzzle," said Pip.',
      image: '/images/spring/page-14.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The stepping stones show a pattern: 12, 24, 36, ___, ___. What two numbers come next? What pattern do you see? Write the complete pattern in your notebook!',
        hint: 'Look at how much is added each time. This is called counting by a number!',
      },
    },
    {
      id: 15,
      text: '"Forty-eight and sixty!" Luna said confidently. She hopped across to the stone marked 60, and it began to glow!',
      image: '/images/spring/page-15.png',
    },
    {
      id: 16,
      text: 'Beneath the glowing stone, hidden in a waterproof pouch, was a beautiful crystal that captured all the colors of spring.',
      image: '/images/spring/page-16.png',
    },
    {
      id: 17,
      text: '"The Spring Crystal!" breathed Pip. "Legend says whoever holds it can understand the language of growing things!"',
      image: '/images/spring/page-17.png',
    },
    {
      id: 18,
      text: 'Luna held the crystal carefully. Suddenly, she could hear the flowers whispering, the trees humming, and the grass sighing contentedly.',
      image: '/images/spring/page-18.png',
    },
    {
      id: 19,
      text: '"Thank you for finding us," the forest seemed to say. "We have been waiting for friends like you. Will you help us with a special mission?"',
      image: '/images/spring/page-19.png',
    },
    {
      id: 20,
      text: 'Luna and Pip looked at each other and nodded. "We will help! What do you need?"',
      challenge: {
        type: 'treasure-hunt',
        title: '🗺️ Real World Quest!',
        description: 'Luna and Pip want to help the forest grow! YOUR mission: Go to a real library and find a book about plants, flowers, or gardening. What is the title of the book you found? Write it in your notebook!',
        hint: 'Ask a librarian for help if you need it. They love helping young adventurers!',
      },
    },
    {
      id: 21,
      text: '"Plant seeds of kindness wherever you go," the forest whispered. "And return when summer warms the land. A new adventure will await."',
      image: '/images/spring/page-21.png',
    },
    {
      id: 22,
      text: 'Sage appeared overhead. "You have done well, young ones. The Spring Crystal will guide you through the seasons. Keep it safe."',
      image: '/images/spring/page-21.png',
    },
    {
      id: 23,
      text: 'As the sun began to set, painting the sky in shades of pink and gold, Luna and Pip sat by Rainbow Pond, grateful for their adventure.',
      image: '/images/spring/page-23.png',
    },
    {
      id: 24,
      text: '"I can\'t wait for summer," Pip said dreamily. "I wonder what adventure awaits us then?"',
      challenge: {
        type: 'math',
        title: '🧮 Final Spring Challenge!',
        description: 'Luna collected 45 special spring memories today. She wants to share them equally among herself, Pip, and Sage (3 friends). How many memories does each friend get? Are there any left over?',
        hint: 'This is a division problem! Try sharing them one at a time to each friend.',
      },
    },
    {
      id: 25,
      text: '"Whatever comes next," Luna said, watching the first stars appear, "we\'ll face it together. That\'s what makes every season wonderful."\n\n🌸 THE END OF SPRING 🌸\n\nContinue to Summer when you\'re ready for the next adventure!',
      image: '/images/spring/cover.png',
    },
  ],
};

