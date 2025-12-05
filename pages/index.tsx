import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>sathian.ai - Experiments in AI</title>
        <meta name="description" content="Experiments in AI for Learning, Building, and Teaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      {/* Red Background as requested */}
      <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-orange-800 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * -50, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          
          {/* Branding / Intro */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Experiments in AI<br />
              <span className="text-3xl md:text-4xl font-medium text-red-100 opacity-90">
                Learning, Building, and Teaching
              </span>
            </h1>
          </motion.div>

          {/* Team Avatar Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { name: 'Isa', img: '/images/avatars/isa.png', delay: 0 },
              { name: 'Dad', img: '/images/avatars/dad.png', delay: 0.1, large: true },
              { name: 'Sia', img: '/images/avatars/sia.png', delay: 0.2 },
            ].map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <div className={`relative ${p.large ? 'w-24 h-24' : 'w-20 h-20'} rounded-full border-4 border-white/30 shadow-xl bg-white/10 backdrop-blur-sm overflow-hidden`}>
                   <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`;
                      }}
                   />
                </div>
                <span className="mt-2 text-white font-display font-bold text-sm opacity-80">{p.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Enter Project One Button */}
          <Link href="/seasons-of-wonder">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group relative
                px-12 py-6 
                bg-yellow-400 hover:bg-yellow-300
                text-red-900 font-display font-extrabold text-2xl md:text-3xl
                rounded-3xl
                shadow-[0_10px_40px_rgba(250,204,21,0.4)]
                border-b-8 border-yellow-600 active:border-b-0 active:translate-y-2
                transition-all
              "
            >
              <span className="block text-base font-bold text-red-800/70 uppercase tracking-wider mb-1">
                Enter Project One
              </span>
              <span className="flex items-center gap-3">
                Seasons of Wonder
                <span className="group-hover:rotate-12 transition-transform">➜</span>
              </span>
              
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-12">
                New!
              </div>
            </motion.button>
          </Link>
          
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-white/60 text-sm font-story flex flex-col items-center gap-1">
          <p>Built with ❤️ by Dad for Isa & Sia</p>
          <p className="text-xs opacity-70">© 2025</p>
        </div>
      </div>
    </>
  );
}
