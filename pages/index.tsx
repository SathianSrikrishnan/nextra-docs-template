import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>sathian.ai - Experiments in AI</title>
        <meta name="description" content="Experiments in AI for Learning, Building, and Teaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-forest-900 via-forest-800 to-forest-600 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Magical particles/Forest atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-sparkle opacity-75" style={{ animationDelay: '0s' }} />
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-yellow-100 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle opacity-60" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-green-300 rounded-full animate-float opacity-30 blur-sm" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-sparkle opacity-80" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Subtle pattern overlay - Trees suggestion */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                              linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                              linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                              linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                              linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77),
                              linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Experiments in AI
          </h1>

          {/* Subtext */}
          <p className="font-story text-xl md:text-2xl text-green-50 mb-16 leading-relaxed drop-shadow-md">
            Test projects to learn, build, and teach.
          </p>

          {/* Enter Button */}
          <Link href="/seasons-of-wonder">
            <button className="
              group
              px-10 py-5 
              bg-yellow-400 hover:bg-yellow-300
              text-forest-900 font-display font-bold text-xl md:text-2xl
              rounded-2xl
              shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)]
              transform hover:scale-105 active:scale-95
              transition-all duration-200
              border-4 border-yellow-200
            ">
              <span className="block text-sm font-normal text-forest-800 mb-1">
                Begin the Adventure
              </span>
              <span className="flex items-center gap-3 justify-center">
                <span className="animate-bounce">✨</span>
                Enter the Storybook World
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>✨</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 text-green-200/80 text-sm font-story">
          Made with love by Dad
        </div>
      </div>
    </>
  );
}
