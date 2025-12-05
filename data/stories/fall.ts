import { Story } from '../types';

export const fallStory: Story = {
  id: 'fall',
  title: 'The Harvest Moon Secret',
  season: 'fall',
  description: 'When autumn leaves reveal an ancient map, Luna and friends embark on their most mysterious adventure yet.',
  coverImage: '/images/fall/cover.png',
  characters: ['Luna the Fox', 'Pip the Bluebird', 'Sage the Owl', 'Fern the Deer', 'Bramble the Hedgehog'],
  pages: [
    {
      id: 1,
      text: 'The Whispering Woods had transformed into a painting of gold, orange, and crimson. Luna watched leaves dance in the cool autumn breeze, her Spring and Summer Crystals glowing warmly.',
      image: '/images/fall/page-1.png',
    },
    {
      id: 2,
      text: 'Pip landed beside her, looking worried. "Luna, something strange is happening. The Great Harvest Moon is in five days, but the Keeper of the Harvest has gone missing!"',
      image: '/images/fall/page-2.png',
    },
    {
      id: 3,
      text: 'The Keeper was an ancient spirit who blessed the forest with plenty each autumn. Without the Keeper, the animals wouldn\'t have enough food for winter.',
      image: '/images/fall/page-3.png',
    },
    {
      id: 4,
      text: 'A small hedgehog named Bramble rolled up to them. "I found something! When the wind blew just right, the falling leaves formed a pattern - like a map!"',
      image: '/images/fall/page-3.png',
    },
    {
      id: 5,
      text: 'They gathered the special leaves that had formed the pattern. Each leaf had a number that needed to be solved.',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The leaves show a math puzzle: The first leaf says 56, the second says "subtract 28." What number should appear on the third leaf? This will tell them which direction to go!',
        hint: 'When you subtract, you might need to borrow. 56 - 28 = ?',
      },
    },
    {
      id: 6,
      text: '"Twenty-eight! That points toward the Whispering Caves!" Luna exclaimed. The friends set off as leaves swirled around them.',
      image: '/images/fall/page-2.png',
    },
    {
      id: 7,
      text: 'The forest was alive with autumn activity - squirrels gathering acorns, birds preparing to fly south, and mushrooms sprouting in fairy rings.',
      image: '/images/fall/page-7.png',
    },
    {
      id: 8,
      text: 'At the entrance to the Whispering Caves, they found strange symbols carved in stone. The autumn light revealed hidden images.',
      image: '/images/fall/page-6.png',
      challenge: {
        type: 'hidden-object',
        title: '🔍 Hidden Object Challenge!',
        description: 'This cave entrance holds many secrets! Find these hidden elements:',
        items: [
          '4 ancient runes glowing faintly on the rocks',
          'A spider web with dewdrops forming a message',
          '3 different types of autumn mushrooms',
          'The face of the Keeper hidden in the stone pattern',
          'A sleeping bat tucked in a shadow',
          '2 acorns that are actually secret buttons',
          'The number "7" formed by cracks in the wall',
        ],
        hint: 'Ancient places hide their secrets in plain sight. Look at shadows and patterns!',
      },
    },
    {
      id: 9,
      text: '"The runes say we need to prove our worth with wisdom," Sage translated. "Each chamber has a test."',
      image: '/images/fall/page-9.png',
    },
    {
      id: 10,
      text: 'The first chamber was filled with piles of acorns. A voice echoed: "The forest creatures collected acorns. Count them true."',
      image: '/images/fall/page-8.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'There are 6 piles of acorns with 14 acorns in each pile. How many acorns are there altogether? (Hint: You can add 14 six times, or try multiplying!)',
        hint: 'Try: 14 + 14 + 14 + 14 + 14 + 14 = ? or 14 × 6 = ?',
      },
    },
    {
      id: 11,
      text: '"Eighty-four acorns!" Bramble announced proudly. The chamber doors swung open, revealing a passage deeper inside.',
      image: '/images/fall/page-8.png',
    },
    {
      id: 12,
      text: 'The second chamber was a maze of fallen autumn branches. "This is the Test of Patterns," Sage explained.',
      image: '/images/fall/page-12.png',
    },
    {
      id: 13,
      text: 'Fern noticed something. "Look! The branches have colors: red, orange, yellow, red, orange, yellow, red, orange..."',
      image: '/images/fall/page-9.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The pattern is: red, orange, yellow, red, orange, yellow... What color comes next? What would the 16th branch color be? Write out the pattern to figure it out!',
        hint: 'The pattern repeats every 3 colors. Count which position 16 would be!',
      },
    },
    {
      id: 14,
      text: '"Yellow!" They followed the yellow branches through the maze, trusting the pattern to guide them.',
      image: '/images/fall/page-9.png',
    },
    {
      id: 15,
      text: 'They emerged into a beautiful cavern filled with glowing crystals and... there was the Keeper, trapped in a cage of twisted vines!',
      image: '/images/fall/page-11.png',
    },
    {
      id: 16,
      text: '"You found me!" The Keeper\'s voice was ancient and kind. "But freeing me requires completing one final quest - in your world, not mine."',
      challenge: {
        type: 'treasure-hunt',
        title: '🗺️ Real World Quest!',
        description: 'The Keeper needs your help! YOUR mission: Go find something in your home that represents autumn or fall - a photo, a decoration, or draw a picture of autumn leaves. Bring it back and describe what you found!',
        hint: 'Look for fall colors: red, orange, yellow, brown. Or things like pumpkins, leaves, or harvest items!',
      },
    },
    {
      id: 17,
      text: 'When the friends showed proof of their autumn treasure, the vines began to loosen. But they needed to solve one more puzzle.',
      image: '/images/fall/page-17.png',
    },
    {
      id: 18,
      text: '"The cage has a lock," Luna noticed. "We need the combination - three numbers that tell the story of autumn."',
      image: '/images/fall/page-11.png',
      challenge: {
        type: 'math',
        title: '🧮 Challenge Time!',
        description: 'The lock needs 3 numbers: First number: 100 - 37, Second number: 25 + 18, Third number: 60 ÷ 4. What is each number? Write your work for all three!',
        hint: 'Solve each problem carefully, one at a time!',
      },
    },
    {
      id: 19,
      text: '"63, 43, 15!" Luna entered the numbers, and the cage dissolved into autumn mist. The Keeper was free!',
      image: '/images/fall/page-11.png',
    },
    {
      id: 20,
      text: '"You have shown courage, wisdom, and kindness," the Keeper said, eyes twinkling like fallen stars. "The forest will be blessed with plenty."',
      image: '/images/fall/page-20.png',
    },
    {
      id: 21,
      text: 'The Keeper touched Luna\'s crystals, and a warm amber light joined them - the Fall Crystal, glowing like harvest moonlight.',
      image: '/images/fall/page-13.png',
    },
    {
      id: 22,
      text: '"Three crystals gathered, one remains," Sage observed. "When winter comes, the greatest adventure of all awaits."',
      image: '/images/fall/page-22.png',
    },
    {
      id: 23,
      text: 'On the night of the Harvest Moon, the whole forest celebrated. Fruits and nuts were plentiful, and every creature had enough.',
      image: '/images/fall/page-13.png',
    },
    {
      id: 24,
      text: 'Luna looked at her three glowing crystals and smiled. Each season had taught her something new.',
      challenge: {
        type: 'math',
        title: '🧮 Final Fall Challenge!',
        description: 'Luna has completed 3 seasons of adventure, with 1 season left. If each season had about 25 pages, how many total pages will she have read after completing all 4 seasons?',
        hint: 'Think: 25 pages × 4 seasons = ?',
      },
    },
    {
      id: 25,
      text: 'As the forest prepared for winter\'s rest, Luna knew the best was yet to come. The final crystal awaited, and with it, the greatest secret of the Whispering Woods.\n\n🍂 THE END OF FALL 🍂\n\nContinue to Winter for the final adventure!',
      image: '/images/fall/cover.png',
    },
  ],
};

