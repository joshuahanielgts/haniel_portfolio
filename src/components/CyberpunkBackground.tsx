
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bolt, CloudLightning } from "lucide-react";

export default function CyberpunkBackground() {
  const [lightnings, setLightnings] = useState<Array<{
    id: number;
    x: number;
    y: number;
    rotation: number;
    size: number;
    opacity: number;
    delay: number;
  }>>([]);
  
  const [thunderFlash, setThunderFlash] = useState(false);
  
  // Significantly reduced frequency and complexity
  useEffect(() => {
    const createLightningEffects = () => {
      // Even fewer lightning bolts
      const newLightnings = [];
      const count = Math.random() > 0.7 ? 1 : 0; // Only 0-1 lightning
      
      for (let i = 0; i < count; i++) {
        newLightnings.push({
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 40, 
          rotation: Math.random() * 360,
          size: Math.random() * 30 + 25, // Smaller sizes
          opacity: Math.random() * 0.4 + 0.2,
          delay: Math.random() * 0.5
        });
      }
      
      setLightnings(newLightnings);
      
      // Much reduced thunder flash frequency
      if (Math.random() > 0.9) {
        setTimeout(() => {
          setThunderFlash(true);
          setTimeout(() => setThunderFlash(false), 50);
        }, 20);
      }
    };
    
    createLightningEffects();
    // Much longer intervals for less frequent updates
    const interval = setInterval(createLightningEffects, 8000 + Math.random() * 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Highly simplified cyberpunk background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-darker via-[#091326] to-cyberpunk-dark" />
        
        {/* Minimal grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzVmNWVmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMTUgMHY2ME0zMCAwdjYwTTQ1IDB2NjAiPjwvcGF0aD48cGF0aCBkPSJNMCAxNWg2ME0wIDMwaDYwTTAgNDVoNjAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        {/* Simplified glowing orbs with minimal blur */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[20vw] h-[20vw] rounded-full bg-cyberpunk-blue/2 blur-xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[15vw] h-[15vw] rounded-full bg-cyberpunk-purple/2 blur-xl"
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Minimal lightning effects */}
        {lightnings.map((lightning) => (
          <motion.div
            key={lightning.id}
            className="absolute"
            style={{
              left: `${lightning.x}%`,
              top: `${lightning.y}%`,
              opacity: 0,
              rotate: `${lightning.rotation}deg`
            }}
            animate={{
              opacity: [0, lightning.opacity, 0],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 0.4,
              delay: lightning.delay,
              ease: "easeInOut"
            }}
          >
            {Math.random() > 0.5 ? (
              <CloudLightning 
                size={lightning.size} 
                className="text-cyberpunk-blue filter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" 
              />
            ) : (
              <Bolt 
                size={lightning.size} 
                className="text-cyberpunk-blue filter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" 
              />
            )}
          </motion.div>
        ))}

        {/* Minimal circuit lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute h-[1px] bg-cyberpunk-blue/20"
            style={{ width: '30%', top: '25%', left: '0%' }}
            animate={{ 
              left: ['0%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 20, 
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 10
            }}
          />
        </div>

        {/* Minimal scanner line effect */}
        <motion.div 
          className="absolute inset-x-0 h-[40px] pointer-events-none"
          style={{ 
            top: '-40%',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.04), transparent)',
          }}
          animate={{
            top: ['-40%', '140%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 10
          }}
        />

        {/* Minimal thunder flash effect */}
        <div 
          className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-50 ease-out"
          style={{ opacity: thunderFlash ? 0.08 : 0 }}
        />
      </div>
    </>
  );
}
