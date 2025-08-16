
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/joshuahanielgts",
    icon: Github,
    color: "from-purple-400 to-pink-400"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshuahanielgts",
    icon: Linkedin,
    color: "from-blue-400 to-cyan-400"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/joshua_gtr",
    icon: Code,
    color: "from-yellow-400 to-orange-400"
  }
];

export default function SocialLinks() {
  return (
    <motion.nav 
      className="w-full flex flex-col items-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-base text-zinc-400 mb-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Find me on:
      </motion.div>
      <div className="flex flex-wrap gap-6 justify-center">
        {socialLinks.map((s, index) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-[#23253c] rounded-full shadow-lg text-[#7b74fd] text-lg font-semibold hover:bg-[#23253cf5] transition"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(130, 199, 255, 0.5)",
              backgroundColor: "#272a45"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              whileHover={{ rotate: 20 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <s.icon size={22} className="group-hover:text-[#00fff2] transition" />
            </motion.div>
            <span>{s.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
