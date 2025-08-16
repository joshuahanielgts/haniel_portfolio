import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CloudLightning, Zap } from "lucide-react";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  const backgroundY1 = useTransform(scrollY, [0, 1500], [0, -200]);
  const backgroundY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const backgroundY3 = useTransform(scrollY, [0, 2000], [0, -300]);
  
  // Lightning state
  const [lightnings, setLightnings] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, delay: number}>>([]);
  const [thunderFlash, setThunderFlash] = useState(false);
  const [electricArcs, setElectricArcs] = useState<Array<{id: number, x1: number, y1: number, x2: number, y2: number, color: string, width: number}>>([]);
  
  // Create random lightning bolts, thunder flash, and electric arcs
  useEffect(() => {
    const createLightningEffects = () => {
      // Create lightning bolts
      const newLightnings = [];
      const count = Math.floor(Math.random() * 5) + 3; // 3-7 lightnings
      
      for (let i = 0; i < count; i++) {
        newLightnings.push({
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 60, // Focus more on upper portion of screen
          size: Math.random() * 80 + 40, // Larger size between 40-120
          opacity: Math.random() * 0.8 + 0.4, // Higher opacity between 0.4-1.2
          delay: Math.random() * 2 // Faster lightning
        });
      }
      
      setLightnings(newLightnings);
      
      // Create electric arcs
      const newArcs = [];
      const arcCount = Math.floor(Math.random() * 8) + 5; // 5-12 arcs
      
      for (let i = 0; i < arcCount; i++) {
        const x1 = Math.random() * 100;
        const y1 = Math.random() * 100;
        newArcs.push({
          id: Math.random(),
          x1: x1,
          y1: y1,
          x2: x1 + (Math.random() * 20 - 10), // Random direction
          y2: y1 + (Math.random() * 20), // Mostly downward
          color: Math.random() > 0.7 ? '#97d3ff' : '#3f87ff', // Varying colors
          width: Math.random() * 3 + 1 // Varying width
        });
      }
      
      setElectricArcs(newArcs);
      
      // Create thunder flash effect
      if (Math.random() > 0.4) { // 60% chance of thunder with lightning
        setTimeout(() => {
          setThunderFlash(true);
          setTimeout(() => setThunderFlash(false), 150 + Math.random() * 100); // Variable flash duration
        }, 50 + Math.random() * 100); // Variable delay
      }
    };
    
    createLightningEffects();
    const interval = setInterval(createLightningEffects, 3000 + Math.random() * 2000); // Variable timing
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark stormy background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030715] via-[#0c1423] to-[#091326] opacity-95" />
      
      {/* First parallax layer - heavy storm clouds */}
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute -top-32 left-0 right-0 w-full h-screen bg-[radial-gradient(ellipse_at_center,rgba(10,15,30,0.9),transparent_70%)] blur-3xl"
      />
      
      {/* Second parallax layer - blue electric glow */}
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute top-1/3 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(32,85,180,0.25),transparent_70%)] blur-3xl"
      />

      {/* Third parallax layer - another accent */}
      <motion.div 
        style={{ y: backgroundY3 }}
        className="absolute bottom-0 left-0 w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(7,28,75,0.3),transparent_70%)] blur-3xl"
      />

      {/* Animated cloud layers */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iZiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMjAiIC8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHR5cGU9ImxpbmVhciIgc2xvcGU9IjAuNSIgaW50ZXJjZXB0PSIwIiAvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSAvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHJlY3QgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwLjEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIC8+Cjwvc3ZnPg==')] opacity-50 animate-[pulse_15s_ease-in-out_infinite]" />

      {/* Lightning bolt icons */}
      {lightnings.map((lightning) => (
        <motion.div
          key={lightning.id}
          className="absolute"
          style={{
            left: `${lightning.x}%`,
            top: `${lightning.y}%`,
            opacity: 0
          }}
          animate={{
            opacity: [0, lightning.opacity, 0],
            scale: [0.8, 1.2, 0.9],
            rotate: [0, Math.random() > 0.5 ? 10 : -10, 0]
          }}
          transition={{
            duration: 0.8,
            delay: lightning.delay,
            ease: "easeInOut"
          }}
        >
          {Math.random() > 0.5 ? (
            <CloudLightning 
              size={lightning.size} 
              className="text-[#97d3ff] filter drop-shadow-[0_0_20px_rgba(130,199,255,0.9)]" 
            />
          ) : (
            <Zap 
              size={lightning.size} 
              className="text-[#97d3ff] filter drop-shadow-[0_0_20px_rgba(130,199,255,0.9)]" 
            />
          )}
        </motion.div>
      ))}

      {/* Electric arcs (SVG lightning) */}
      <svg className="absolute inset-0 w-full h-full">
        {electricArcs.map((arc) => (
          <motion.line
            key={arc.id}
            x1={`${arc.x1}%`}
            y1={`${arc.y1}%`}
            x2={`${arc.x2}%`}
            y2={`${arc.y2}%`}
            stroke={arc.color}
            strokeWidth={arc.width}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 0.4 + Math.random() * 0.3,
              ease: "easeOut"
            }}
            filter="drop-shadow(0 0 8px rgba(130,199,255,0.8))"
          />
        ))}
      </svg>

      {/* Thunder flash effect */}
      <div 
        className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-100 ease-out"
        style={{ opacity: thunderFlash ? 0.2 : 0 }}
      />
      
      {/* Distant lightning flashes - enhanced */}
      <div className="absolute inset-0 distant-lightning-enhanced opacity-25"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNCAwaDF2NWgtMXYtNXptLTUgMWgxdjRoLTF2LTR6bTUgMGgxdjRoLTF2LTR6TTN1IDMwaDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNCAwaDF2NWgtMXYtNXptLTUgMWgxdjRoLTF2LTR6bTUgMGgxdjRoLTF2LTR6TTIwIDI2aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNCAwaDF2NWgtMXYtNXptLTUgMWgxdjRoLTF2LTR6bTUgMGgxdjRoLTF2LTR6TTQgMTdoNHYxSDR2LTF6bTAtMmgxdjVINHYtNXptNCAwaDF2NUg4di01em0tNSAxaDF2NEg0di00em01IDBoMXY0SDl2LTR6bTExLTVoNHYxaC00di0xem0wLTJoMXY1aC0xdi01em00IDBoMXY1aC0xdi01em0tNSAxaDF2NGgtMXYtNHptNSAwaDJ2NGgtMXYtM2gtMXYtMXpNMTIgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTFWMnptNCAwaDF2NWgtMVYyem0tNSAxaDF2NGgtMXYtNHptNSAwaDJ2NGgtMXYtM2gtMXYtMXpNMSA2aDR2MUgxVjZ6bTAtMmgxdjVIMVY0em00IDBoMXY1SDVWNHptLTUgMWgxdjRIMVY1em01IDBoMnY0SDZWNmgtMVY1ek0yMSAwaDR2MWgtNHYtMXptMCAyaDR2MWgtNFYyem0wLTJoMXY1aC0xVjB6bTQgMGgxdjVoLTVWNGgxVjFoM3YtMXptLTUgMWgxdjRoLTF2LTR6bTUtMWgxdjVoLTF2LTV6bS0xIDFoMXY0aC0xdi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      {/* Electric pulses - added for more dynamic lightning effect */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`pulse-${index}`}
          className="absolute rounded-full bg-[#97d3ff]"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 3) * 20}%`,
            width: `${100 + index * 50}px`,
            height: `${100 + index * 50}px`,
            filter: 'blur(50px)',
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.1, 0],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: 2,
            delay: index * 0.8 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 4
          }}
        />
      ))}
    </div>
  );
}
