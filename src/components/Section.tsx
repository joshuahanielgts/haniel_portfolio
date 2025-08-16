
import React from "react";
import { motion } from "framer-motion";
import { Bolt } from "lucide-react";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  // Glitch animation variants
  const glitchVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, boxShadow: "0 0 25px rgba(0,240,255,0.3)" }
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={glitchVariants}
      className="mb-12 w-full px-4 py-8 rounded-2xl bg-[#0d122299] border border-[#5f5eff44] backdrop-blur-lg relative overflow-hidden"
    >
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzVmNWVmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0xNSAwdjYwTTMwIDB2NjBNNDUgMHY2MCI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDE1aDYwTTAgMzBoNjBNMCA0NWg2MCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-40 pointer-events-none"></div>
      
      {/* Cyberpunk corner decorations */}
      <div className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-[#00f0ff] opacity-70"></div>
      <div className="absolute right-0 top-0 w-8 h-8 border-r-2 border-t-2 border-[#00f0ff] opacity-70"></div>
      <div className="absolute left-0 bottom-0 w-8 h-8 border-l-2 border-b-2 border-[#00f0ff] opacity-70"></div>
      <div className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-[#00f0ff] opacity-70"></div>
      
      {/* Glowing edges */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff80] to-transparent"></div>
      <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff80] to-transparent"></div>
      <div className="absolute inset-y-8 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#00f0ff80] to-transparent"></div>
      <div className="absolute inset-y-8 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#00f0ff80] to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {title && (
          <motion.div 
            className="relative mb-6 inline-block"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="w-8 h-8 flex items-center justify-center bg-[#5f5eff33] rounded-md border border-[#5f5eff55]"
                whileHover={{ scale: 1.1, backgroundColor: "#5f5eff44" }}
              >
                <Bolt size={18} className="text-[#00f0ff]" />
              </motion.div>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-bold font-orbitron tracking-wider uppercase select-none bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#5f5eff]"
                whileHover={{ textShadow: "0 0 8px rgba(0,240,255,0.8)" }}
              >
                {title}
              </motion.h2>
            </div>
            
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ 
                background: "linear-gradient(90deg, #00f0ff, #5f5eff)",
                boxShadow: "0 0 10px rgba(0,240,255,0.8)",
                transformOrigin: "left"
              }}
            />
            
            {/* Animated circuit lines */}
            <svg className="absolute top-full left-0 mt-1 w-32 h-6" viewBox="0 0 100 20">
              <motion.path
                d="M0,10 L20,10 L30,5 L50,15 L60,5 L80,15 L100,10"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="1"
                strokeDasharray="0,10"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ 
                  duration: 3, 
                  ease: "linear", 
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>
        )}
        
        {children}
      </div>

      {/* Interactive lightning effects that appear on hover */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0"
        whileHover={{ 
          opacity: 0.7, 
          rotate: 15,
          scale: 1.2,
          transition: { duration: 0.4 }
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#00f0ff" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 5px #00f0ff)" }}
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      </motion.div>
    </motion.section>
  );
}
