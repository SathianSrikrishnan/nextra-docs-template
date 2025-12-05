import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

export const MouseSparkle: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#90EE90'];
    let count = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add a new sparkle every few frames or distance
      if (Math.random() > 0.5) {
        const newSparkle: Sparkle = {
          id: count++,
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 10 + 5,
        };

        setSparkles(prev => [...prev.slice(-20), newSparkle]);
        
        // Cleanup
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render on touch devices ideally, but CSS media queries are better.
  // For now we rely on mouse events which don't fire often on touch drag.

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y }}
            animate={{ 
              opacity: 0, 
              scale: 1, 
              x: sparkle.x + (Math.random() - 0.5) * 50, 
              y: sparkle.y + 50 // Fall down
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: sparkle.size,
              height: sparkle.size,
              background: sparkle.color,
              borderRadius: '50%',
              boxShadow: `0 0 ${sparkle.size}px ${sparkle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

