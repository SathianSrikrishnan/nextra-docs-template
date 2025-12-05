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
    { name: 'Isa', title: 'Nature Detective', img: '/images/avatars/isa.png', color: 'bg-pink-100 text-pink-700 border-pink-200 ring-pink-300' },
    { name: 'Sia', title: 'Pattern Expert', img: '/images/avatars/sia.png', color: 'bg-purple-100 text-purple-700 border-purple-200 ring-purple-300' },
    { name: 'Dad', title: 'Chief Storyteller', img: '/images/avatars/dad.png', color: 'bg-blue-100 text-blue-700 border-blue-200 ring-blue-300' },
  ];

  return (
    <>
      <Head>
        <title>Seasons of Wonder - A Magical Storybook Adventure</title>
        <meta name="description" content="Join Luna the Fox and her friends on magical adventures through Spring, Summer, Fall, and Winter. A storybook filled with challenges, puzzles, and wonder!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      {/* Magical Background with subtle texture */}
      <div className="min-h-screen bg-[#FAF9F6] relative overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
        {/* Background Blobs */}
        <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
           <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
        </div>

        {/* Floating Seasonal Icons Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl md:text-4xl opacity-20"
              initial={{ 
                x: Math.random() * 100 + 'vw', 
                y: Math.random() * 100 + 'vh',
                rotate: Math.random() * 360 
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                rotate: [null, Math.random() * 360 + 360]
              }}
              transition={{ 
                duration: Math.random() * 20 + 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {['🌸', '☀️', '🍂', '❄️', '🦋', '🦊'][i % 6]}
            </motion.div>
          ))}
        </div>

        {/* Branding Header */}
        <div className="absolute top-0 left-0 w-full z-20 px-4 py-3 flex justify-between items-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-display font-bold text-gray-600 hover:text-gray-900 hover:bg-white transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-lg">🚀</span>
            <span className="tracking-wide">Sathian.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/50">
             <span className="text-xs font-display font-bold text-gray-500 uppercase tracking-wider">Team Wonder:</span>
             <div className="flex -space-x-2">
                {explorers.map(e => (
                  <div key={e.name} className="w-6 h-6 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
                    <img src={e.img} alt={e.name} className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative pt-24 pb-10 px-4 z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Main Title with bouncing animation on hover */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative inline-block mb-6"
            >
              <h1 className="font-display font-extrabold text-5xl md:text-7xl drop-shadow-sm text-gray-800 relative z-10">
                Seasons of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-yellow-500 to-orange-500">Wonder</span>
              </h1>
              {/* Cute character peeking out */}
              <motion.div 
                className="absolute -top-12 -right-8 w-16 h-16 md:w-24 md:h-24 z-0"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                 <img src="/images/characters/character-pip.png" alt="Pip" className="w-full h-full object-contain drop-shadow-md" />
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-story text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              A magical storybook adventure where <span className="font-bold text-gray-800">Isa</span>, <span className="font-bold text-gray-800">Sia</span>, and <span className="font-bold text-gray-800">Dad</span> solve mysteries with Luna the Fox!
            </motion.p>

            {/* The Explorers Cards (Hero Feature) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
            >
              {explorers.map((explorer, idx) => (
                <motion.div 
                  key={explorer.name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border-2 border-white flex flex-col items-center w-32 md:w-40"
                >
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 shadow-sm mb-3 ${explorer.ring}`}>
                    <img 
                      src={explorer.img} 
                      alt={explorer.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${explorer.name}`;
                      }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-800">{explorer.name}</h3>
                  <p className="font-story text-xs text-gray-500 leading-tight">{explorer.title}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Toolkit Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex flex-wrap justify-center items-center gap-3 md:gap-6 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50 mx-auto"
            >
              <span className="font-display font-bold text-gray-400 uppercase text-xs tracking-widest mr-2">Mission Kit:</span>
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2" title={tool.desc}>
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-display font-bold text-gray-700 text-sm hidden md:inline">{tool.name}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </header>

        {/* Meet the Friends Section */}
        <section className="px-4 py-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden">
              {/* Decorative background icon */}
              <div className="absolute -right-10 -top-10 text-9xl opacity-5 rotate-12">🦊</div>
              
              <div className="text-center mb-8 relative z-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-800 flex items-center justify-center gap-3">
                  <span>🌲</span> Meet Your Forest Friends <span>🌲</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                {[
                  { name: 'Luna', role: 'The Brave', img: '/images/characters/character-luna.png', bg: 'bg-orange-50', ring: 'ring-orange-200' },
                  { name: 'Pip', role: 'The Cheerful', img: '/images/characters/character-pip.png', bg: 'bg-blue-50', ring: 'ring-blue-200' },
                  { name: 'Sage', role: 'The Wise', img: '/images/characters/character-sage.png', bg: 'bg-slate-50', ring: 'ring-slate-200' },
                  { name: 'Fern', role: 'The Gentle', img: '/images/characters/character-fern.png', bg: 'bg-green-50', ring: 'ring-green-200' },
                  { name: 'Bramble', role: 'The Clever', img: '/images/characters/character-bramble.png', bg: 'bg-amber-50', ring: 'ring-amber-200' },
                ].map((char) => (
                  <motion.div 
                    key={char.name} 
                    whileHover={{ y: -5 }}
                    className={`text-center p-3 rounded-2xl ${char.bg} transition-colors`}
                  >
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 shadow-sm ${char.ring}`}>
                      <img 
                        src={char.img} 
                        alt={char.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-800">{char.name}</h3>
                    <p className="font-story text-xs text-gray-500">{char.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Cards Grid */}
        <main className="px-4 pb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-800 mb-2">
                Choose Your Adventure
              </h2>
              <p className="font-story text-lg text-gray-600">
                Start with Spring and journey through the year!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storyList.map((story, index) => {
                const seasonInfo = SEASONS.find(s => s.id === story.season)!;
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SeasonCard 
                      story={story} 
                      seasonInfo={seasonInfo}
                      index={index}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-md py-10 px-4 border-t border-gray-100 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-blue-100">
               <img 
                 src="/images/avatars/dad.png" 
                 alt="Dad" 
                 className="object-cover w-full h-full"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dad";
                 }}
               />
            </div>
            <div>
              <p className="font-display font-bold text-gray-700 text-lg flex items-center justify-center gap-2">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by Dad
              </p>
              <p className="font-story text-gray-500">
                For my favorite explorers, Isa & Sia
              </p>
            </div>
            <div className="text-xs text-gray-400 font-mono mt-4">
              © 2025 Sathian.ai Projects
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

