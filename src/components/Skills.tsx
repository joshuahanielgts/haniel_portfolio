
import { Code, Book, Github, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

// Updated Tech Skills list based on request
const TECH_SKILLS = [
  { label: "Python Development", icon: Code, color: "#4584b6", description: "Extensive experience with Python for data analysis, automation, and web development." },
  { label: "C++ Development", icon: Code, color: "#ff861b", description: "Strong proficiency in C++ programming for system-level applications and algorithms." },
  { label: "DBMS Development", icon: Code, color: "#00758f", description: "Database design, query optimization, and management using SQL and database systems." },
  { label: "Power BI Analyst", icon: Book, color: "#f2c811", description: "Creating insightful dashboards and reports using Microsoft Power BI for data visualization and business intelligence." },
  { label: "AI Tools Expert", icon: Star, color: "#00c6ff", description: "Proficient with AI tools and frameworks for developing intelligent applications and automation solutions." }
];

const SOFT_SKILLS = [
  { label: "Leadership", icon: Star, color: "#ffd700", description: "Experience leading project teams and organizing technical initiatives." },
  { label: "Teamwork", icon: Users, color: "#00d4ff", description: "Strong collaboration skills, working efficiently in cross-functional teams." },
  { label: "Organizing Events", icon: Book, color: "#ff6b6b", description: "Planning and coordinating technical and non-technical events." },
  { label: "Problem Solving", icon: Code, color: "#4caf50", description: "Ability to analyze complex situations and develop effective solutions." },
  { label: "Communication", icon: Users, color: "#ff9800", description: "Excellent verbal and written communication skills for team collaboration and client interactions." }
];

export default function Skills() {
  // Updated skills list with removed items
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"tech" | "soft">("tech");

  const currentSkills = activeCategory === "tech" ? TECH_SKILLS : SOFT_SKILLS;

  return (
    <Section id="skills" title="Skills">
      {/* Category Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#1a1f3388] rounded-lg p-1 inline-flex">
          <motion.button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === "tech"
                ? "bg-[#5f5eff33] text-[#82c7ff] shadow-inner"
                : "text-gray-400 hover:text-gray-200"
            }`}
            whileHover={{ scale: activeCategory === "tech" ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory("tech");
              setActiveSkill(null);
            }}
          >
            Tech Skills
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === "soft"
                ? "bg-[#5f5eff33] text-[#82c7ff] shadow-inner"
                : "text-gray-400 hover:text-gray-200"
            }`}
            whileHover={{ scale: activeCategory === "soft" ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory("soft");
              setActiveSkill(null);
            }}
          >
            Soft Skills
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        key={activeCategory} // This forces re-render when category changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      >
        {currentSkills.map((skill) => (
          <SkillCard 
            key={skill.label}
            skill={skill}
            isActive={activeSkill === skill.label}
            onActivate={() => setActiveSkill(activeSkill === skill.label ? null : skill.label)}
          />
        ))}
      </motion.div>

      {/* Skill description area */}
      <AnimatedSkillDescription 
        activeSkill={[...TECH_SKILLS, ...SOFT_SKILLS].find(s => s.label === activeSkill)}
      />
    </Section>
  );
}

function SkillCard({ 
  skill, 
  isActive, 
  onActivate 
}: { 
  skill: typeof TECH_SKILLS[number] | typeof SOFT_SKILLS[number], 
  isActive: boolean, 
  onActivate: () => void 
}) {
  return (
    <motion.div
      onClick={onActivate}
      className={`flex flex-col items-center bg-[#22263a88] rounded-xl p-4 glass-morphism cursor-pointer shadow-md group ${isActive ? 'ring-2 ring-[#82c7ff] shadow-lg shadow-[#82c7ff33]' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        animate={{ 
          rotate: isActive ? [0, 10, -10, 0] : 0,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 200
        }}
      >
        <skill.icon size={32} color={skill.color} className="mb-2 drop-shadow-lg" />
      </motion.div>
      <span className={`text-gray-100 font-medium text-center text-xs transition-colors ${isActive ? 'text-[#82c7ff]' : ''}`}>
        {skill.label}
      </span>
      {isActive && (
        <motion.div 
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#82c7ff] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId="activeIndicator"
        />
      )}
    </motion.div>
  );
}

function AnimatedSkillDescription({ activeSkill }: { activeSkill?: (typeof TECH_SKILLS[number] | typeof SOFT_SKILLS[number]) }) {
  return (
    <motion.div 
      className="mt-6 min-h-[60px] relative overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: activeSkill ? 1 : 0,
        height: activeSkill ? "auto" : 0
      }}
      transition={{ duration: 0.3 }}
    >
      {activeSkill && (
        <motion.div
          className="p-4 bg-[#1a1f3388] rounded-lg border border-[#82c7ff33]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <activeSkill.icon size={18} color={activeSkill.color} />
            <h3 className="text-[#82c7ff] font-semibold">{activeSkill.label}</h3>
          </div>
          <p className="text-zinc-300 text-sm">{activeSkill.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
