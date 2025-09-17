import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Calendar } from "lucide-react";
import Section from "./Section";

const ACHIEVEMENTS = [
  {
    title: "SAMHITA Hackathon Winner",
    position: "1st Place",
    icon: Trophy,
    color: "#ffd700",
    description: "Won first place in the SAMHITA Hackathon, demonstrating exceptional problem-solving skills and innovative technical solutions.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "ACEHACKS Runner-up",
    position: "2nd Place", 
    icon: Award,
    color: "#c0c0c0",
    description: "Secured second place at ACEHACKS, showcasing strong competitive programming and development capabilities.",
    gradient: "from-gray-300 to-gray-500"
  }
];

export default function TechnicalAchievements() {
  return (
    <Section id="achievements" title="Technical Achievements">
      <div className="grid gap-6 md:grid-cols-2">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard 
            key={achievement.title}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
      
      {/* Summary Stats */}
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-[#1a1f3388] rounded-lg p-6 border border-[#5f5eff44] backdrop-blur-sm">
          <div className="flex items-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#ffd700]" />
              <span className="text-[#82c7ff] font-semibold">2 Hackathons Won</span>
            </div>
            <div className="w-px h-6 bg-[#5f5eff44]"></div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#00f0ff]" />
              <span className="text-zinc-300">Competitive Programming</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function AchievementCard({ 
  achievement, 
  index 
}: { 
  achievement: typeof ACHIEVEMENTS[number], 
  index: number 
}) {
  return (
    <motion.div
      className="group relative bg-[#22263a88] rounded-xl p-6 glass-morphism border border-[#5f5eff44] hover:border-[#00f0ff66] transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff11] to-[#5f5eff11] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Achievement Icon */}
      <motion.div 
        className="flex items-center justify-center w-16 h-16 rounded-full mb-4 relative z-10"
        style={{ 
          background: `linear-gradient(135deg, ${achievement.color}22, ${achievement.color}44)`,
          border: `2px solid ${achievement.color}66`
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: `0 0 20px ${achievement.color}66`
        }}
      >
        <achievement.icon 
          size={28} 
          style={{ color: achievement.color }}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Achievement Details */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-100 font-orbitron">
            {achievement.title}
          </h3>
          <motion.span 
            className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.gradient} text-white`}
            whileHover={{ scale: 1.05 }}
          >
            {achievement.position}
          </motion.span>
        </div>
        
        <p className="text-zinc-300 text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#00f0ff33] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border border-[#5f5eff44] rounded-sm opacity-30 group-hover:opacity-70 transition-opacity" />
      
      {/* Animated corner accents */}
      <motion.div 
        className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00f0ff] opacity-0 group-hover:opacity-70 transition-opacity"
        whileHover={{ scale: 1.1 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#5f5eff] opacity-0 group-hover:opacity-70 transition-opacity"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
}