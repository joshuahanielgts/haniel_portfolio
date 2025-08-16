import React from "react";
import { Github, Linkedin, Bolt } from "lucide-react";
import { motion } from "framer-motion";

const heroHeadlines = [
  "Software Project Manager",
  "AIML Innovator", 
  "Hackathon Champion",
  "CS Projects Enthusiast",
  "AI Tools Expert"
];

export default function Hero() {
  return (
    <section className="relative py-12 flex flex-col items-center w-full select-none">
      {/* Glitch effects and cybernetic circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated glow circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 300}px`,
              height: `${200 + i * 300}px`,
              background: `radial-gradient(circle, rgba(0,240,255,${0.03 - i * 0.01}) 0%, rgba(95,94,255,${0.02 - i * 0.01}) 50%, transparent 70%)`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Digital circuit lines */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M10,30 L30,30 L30,10 L50,10 L50,40 L70,40 L70,20 L90,20"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="0.2"
            strokeDasharray="0,10"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ 
              duration: 5, 
              ease: "linear", 
              repeat: Infinity,
            }}
          />
          <motion.path
            d="M10,70 L40,70 L40,50 L60,50 L60,80 L80,80 L80,60 L90,60"
            fill="none"
            stroke="#5f5eff"
            strokeWidth="0.2"
            strokeDasharray="0,10"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ 
              duration: 5, 
              ease: "linear", 
              repeat: Infinity, 
              delay: 0.5
            }}
          />
        </svg>
      </div>

      {/* Avatar with cybernetic frame */}
      <motion.div
        className="mb-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#5f5eff] to-[#a726e8] p-1 animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#a726e8] opacity-50 blur-lg" />
          <img
            src="/lovable-uploads/839d78df-9ba8-4203-b3a5-4b260f8cb82b.png"
            alt="J Joshua Haniel"
            className="w-40 h-40 rounded-full object-cover border-4 border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.7)] relative z-10 bg-black/40"
            loading="eager"
          />
          
          {/* Cybernetic decorations */}
          <div className="absolute inset-0 rounded-full border-8 border-dashed border-[#5f5eff30] animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Small bolts decorations */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-5 h-5 flex items-center justify-center"
              style={{
                left: `calc(50% + ${38 * Math.cos(i * Math.PI / 4)}px)`,
                top: `calc(50% + ${38 * Math.sin(i * Math.PI / 4)}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{
                duration: 2,
                delay: i * 0.25,
                repeat: Infinity
              }}
            >
              <Bolt size={16} className="text-[#00f0ff]" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Name with enhanced Cyberpunk Style */}
      <div className="relative">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#5f5eff] to-[#a726e8] mb-2 tracking-wider uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          J Joshua Haniel
        </motion.h1>
        
        {/* Text glitch effect */}
        <motion.h1 
          className="absolute inset-0 text-4xl md:text-6xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#5f5eff] to-[#a726e8] mb-2 tracking-wider uppercase animate-cyber-glitch"
          style={{ clipPath: 'inset(50% 0 50% 0)' }}
        >
          J Joshua Haniel
        </motion.h1>
        
        {/* Second glitch layer with different timing */}
        <motion.h1 
          className="absolute inset-0 text-4xl md:text-6xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#a726e8] to-[#00f0ff] mb-2 tracking-wider uppercase"
          animate={{ 
            clipPath: [
              'inset(20% 0 60% 0)', 
              'inset(60% 0 20% 0)', 
              'inset(20% 0 60% 0)'
            ],
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatDelay: 3,
            repeatType: "reverse"
          }}
        >
          J Joshua Haniel
        </motion.h1>
      </div>
      
      <AnimatedHeadline />

      <motion.p 
        className="mt-6 max-w-lg text-[#97d3ffcc] text-lg text-center mx-auto border border-[#5f5eff33] bg-[#0d122233] rounded-lg p-4 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Building delightful digital products, writing beautiful code, and solving challenging problems in the neon-lit digital frontier. Always learning. Always shipping.
      </motion.p>

      {/* Main Socials row with cyberpunk styling - removed Mail */}
      <motion.div 
        className="mt-7 flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <HeroSocial
          label="GitHub"
          href="https://github.com/joshuahanielgts"
          Icon={Github}
        />
        <HeroSocial
          label="LinkedIn"
          href="https://www.linkedin.com/in/joshuahanielgts"
          Icon={Linkedin}
        />
      </motion.div>
    </section>
  );
}

// Enhanced typing animation for headline with letter-by-letter effect
function AnimatedHeadline() {
  const [index, setIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);

  const currentHeadline = heroHeadlines[index];

  React.useEffect(() => {
    if (isTyping && displayedText.length < currentHeadline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentHeadline.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isTyping && displayedText.length === currentHeadline.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (!isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIsTyping(true);
        setIndex((i) => (i + 1) % heroHeadlines.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentHeadline, isTyping]);

  return (
    <motion.div 
      className="min-h-[38px] mb-3 bg-[#0d122277] px-6 py-2 rounded-md border border-[#5f5eff44] backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <span className="block text-xl md:text-2xl font-semibold text-[#00f0ff] tracking-wide font-orbitron transition-all duration-700 flex items-center">
        <Bolt className="mr-2 text-[#5f5eff]" />
        {displayedText}
        <span className="inline-block w-2 h-5 -mb-0.5 bg-[#00f0ffee] ml-2 animate-pulse rounded"></span>
      </span>
    </motion.div>
  );
}

function HeroSocial({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff] to-[#5f5eff] rounded-full opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-300"></div>
      <div className="bg-[#0d1222] rounded-full p-4 shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 relative z-10 border border-[#5f5eff44]">
        <Icon size={28} className="text-[#00f0ff] group-hover:text-white transition-colors" />
        <span className="sr-only">{label}</span>
      </div>
    </a>
  );
}
