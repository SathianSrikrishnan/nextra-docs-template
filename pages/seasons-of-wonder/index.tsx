import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { storyList } from '../../data/stories';
import { SEASONS } from '../../data/types';
import { SeasonCard } from '../../components';

export default function SeasonsOfWonderHome() {
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
        <header className="relative overflow-hidden pt-16 pb-12 px-4">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-float opacity-60">🌸</div>
          <div className="absolute top-20 right-16 text-3xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>☀️</div>
          <div className="absolute bottom-10 left-20 text-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}>🍂</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>❄️</div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Title */}
            <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">
              <span className="bg-gradient-to-r from-green-600 via-yellow-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                Seasons of Wonder
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-story text-xl md:text-2xl text-gray-600 mb-6">
              ✨ A Magical Journey Through the Year ✨
            </p>

            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <p className="font-story text-gray-700 text-lg leading-relaxed">
                Join <span className="font-bold text-orange-600">Luna the Fox</span> and her friends 
                as they discover the magic hidden in every season. Along the way, you&apos;ll solve 
                puzzles, find hidden treasures, and go on real-world adventures!
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 rounded-full text-sm font-display text-orange-700">
                  🧮 Math Challenges
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full text-sm font-display text-blue-700">
                  🔍 Hidden Objects
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full text-sm font-display text-green-700">
                  🗺️ Treasure Hunts
                </span>
              </div>
            </div>

            {/* Notebook reminder */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-2 border-yellow-300 rounded-xl">
              <span className="text-2xl">📓</span>
              <span className="font-display font-semibold text-yellow-800">
                Grab your notebook and pencil!
              </span>
            </div>
          </div>
        </header>

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
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-gray-600">
              Made with 💚 for curious minds
            </p>
            <p className="font-story text-sm text-gray-400 mt-2">
              A special storybook adventure for brave young readers
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

