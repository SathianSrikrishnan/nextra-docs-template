import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { storyList } from '../../data/stories';
import { SEASONS } from '../../data/types';
import { SeasonCard } from '../../components';

export default function SeasonsOfWonderHome() {
  const tools = [
    { icon: '🧠', name: 'Brain', desc: 'For thinking' },
    { icon: '📝', name: 'Notebook', desc: 'For clues' },
    { icon: '✏️', name: 'Pencil', desc: 'For solving' },
    { icon: '👀', name: 'Eyes', desc: 'For spotting' },
  ];

  const explorers = [
    { name: 'Issa', title: 'Nature Detective', img: '/images/avatars/avatar-issa.png', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { name: 'Sia', title: 'Pattern Expert', img: '/images/avatars/avatar-sia.png', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'Dad', title: 'Chief Storyteller', img: '/images/avatars/avatar-dad.png', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  ];

  return (
    <>
      <Head>
        <title>Seasons of Wonder - A Magical Storybook Adventure</title>
        <meta name="description" content="Join Luna the Fox and her friends on magical adventures through Spring, Summer, Fall, and Winter. A storybook filled with challenges, puzzles, and wonder!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sky-100 via-green-50 to-orange-50">
        {/* Back to sathian.ai */}
        <div className="absolute top-4 left-4 z-20">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-display text-gray-600 hover:text-gray-900 hover:bg-white transition-all shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            sathian.ai
          </Link>
        </div>

        {/* Hero Section */}
        <header className="relative overflow-hidden pt-16 pb-8 px-4">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-float opacity-60">🌸</div>
          <div className="absolute top-20 right-16 text-3xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>☀️</div>
          <div className="absolute bottom-10 left-20 text-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}>🍂</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>❄️</div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-extrabold text-4xl md:text-6xl mb-4"
            >
              <span className="bg-gradient-to-r from-green-600 via-yellow-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                Seasons of Wonder
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-story text-xl md:text-2xl text-gray-600 mb-8"
            >
              ✨ A Magical Journey Through the Year ✨
            </motion.p>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto mb-8"
            >
              <p className="font-story text-gray-700 text-lg leading-relaxed">
                Join <span className="font-bold text-orange-600">Luna the Fox</span> and her friends 
                as they discover the magic hidden in every season. Along the way, you&apos;ll solve 
                puzzles, find hidden treasures, and go on real-world adventures!
              </p>
            </motion.div>

            {/* Adventure Toolkit */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              <div className="text-sm font-display font-bold text-gray-500 mb-3 uppercase tracking-wider">Adventure Toolkit</div>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, idx) => (
                  <motion.div 
                    key={tool.name}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-white/80 px-4 py-3 rounded-xl shadow-sm border-2 border-white cursor-pointer select-none"
                  >
                    <span className="text-2xl mb-1">{tool.icon}</span>
                    <span className="font-display font-bold text-gray-700 text-sm">{tool.name}</span>
                    <span className="font-story text-xs text-gray-500">{tool.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        {/* The Explorers Section */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-800">
                The Explorers
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {explorers.map((explorer, idx) => (
                <motion.div 
                  key={explorer.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex flex-col items-center"
                >
                  <div className={`relative w-24 h-24 md:w-28 md:h-28 mb-3 rounded-full overflow-hidden border-4 shadow-lg ${explorer.color.split(' ')[2]}`}>
                    <img 
                      src={explorer.img} 
                      alt={explorer.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        // Fallback avatar if image missing
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${explorer.name}`;
                      }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-800">{explorer.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mt-1 ${explorer.color}`}>
                    {explorer.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Characters Section */}
        <section className="px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-800">
                  Meet Your Adventure Friends
                </h2>
                <p className="font-story text-gray-500 mt-2">
                  Who will you meet in the Whispering Woods?
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { name: 'Luna', role: 'The Brave Fox', img: '/images/characters/character-luna.png', color: 'bg-orange-100 text-orange-700' },
                  { name: 'Pip', role: 'The Cheerful Bird', img: '/images/characters/character-pip.png', color: 'bg-blue-100 text-blue-700' },
                  { name: 'Sage', role: 'The Wise Owl', img: '/images/characters/character-sage.png', color: 'bg-gray-100 text-gray-700' },
                  { name: 'Fern', role: 'The Gentle Deer', img: '/images/characters/character-fern.png', color: 'bg-green-100 text-green-700' },
                  { name: 'Bramble', role: 'The Clever Hedgehog', img: '/images/characters/character-bramble.png', color: 'bg-amber-100 text-amber-700' },
                ].map((char) => (
                  <div key={char.name} className="text-center group">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white shadow-md transform group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={char.img} 
                        alt={char.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#f3f4f6';
                        }}
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-800">{char.name}</h3>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mt-1 ${char.color}`}>
                      {char.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Cards Grid */}
        <main className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-800">
                Choose Your Adventure
              </h2>
              <p className="font-story text-gray-500 mt-2">
                Each season brings new magic and challenges
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {storyList.map((story, index) => {
                const seasonInfo = SEASONS.find(s => s.id === story.season)!;
                return (
                  <SeasonCard 
                    key={story.id} 
                    story={story} 
                    seasonInfo={seasonInfo}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/40 backdrop-blur-sm py-8 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
               <img 
                 src="/images/avatars/avatar-dad.png" 
                 alt="Dad" 
                 className="object-cover w-full h-full"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dad";
                 }}
               />
            </div>
            <p className="font-display text-gray-600 flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by Dad
            </p>
            <p className="font-story text-sm text-gray-400">
              For Issa & Sia • 2025
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

