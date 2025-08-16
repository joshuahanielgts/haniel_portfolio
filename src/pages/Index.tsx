import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CyberpunkBackground from "@/components/CyberpunkBackground";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Bolt } from "lucide-react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    let ticking = false;
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 100) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > window.innerHeight * 0.3) {
            setShowScrollIndicator(false);
          } else {
            setShowScrollIndicator(true);
          }
          ticking = false;
          lastScrollTime = now;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14] flex flex-col items-center justify-start dark relative overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] to-[#5f5eff] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <CyberpunkBackground />
      <Navbar />

      <main className="w-full max-w-3xl sm:max-w-6xl mx-auto z-10 relative px-4 pt-20">
        <section id="home">
          <Hero />
        </section>

        <SectionDivider />

        <section id="about">
          <About />
        </section>

        <SectionDivider />

        <section id="skills">
          <Skills />
        </section>

        <SectionDivider />

        <section id="projects">
          <Projects />
        </section>

        <SectionDivider />

        <section id="contact">
          <Contact />
        </section>

        <SectionDivider />

        <SocialLinks />

        <motion.footer
          className="w-full py-8 text-center text-zinc-400 select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-sm mb-2 font-orbitron tracking-wider">
            © {new Date().getFullYear()} J Joshua Haniel
          </div>
        </motion.footer>
      </main>

      {showScrollIndicator && (
        <motion.div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          exit={{ opacity: 0, y: 10 }}
        >
          <span className="text-[#00f0ff] text-xs font-orbitron tracking-widest uppercase mb-2">
            Scroll Down
          </span>
          <motion.div
            className="w-6 h-10 rounded-md border border-[#5f5eff] flex justify-center p-1 relative"
            style={{ boxShadow: "0 0 6px rgba(0,240,255,0.15)" }}
          >
            <motion.div
              className="w-1 h-2 bg-[#00f0ff] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ boxShadow: "0 0 3px #00f0ff" }}
            />

            <div className="absolute -left-2 top-1/2 w-2 h-[1px] bg-[#00f0ff] opacity-40"></div>
            <div className="absolute -right-2 top-1/2 w-2 h-[1px] bg-[#00f0ff] opacity-40"></div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

function SectionDivider() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="my-16 flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative h-[3px] w-40 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        animate={{
          width: hovered ? 160 : 140,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-[#00f0ff22] via-[#5f5eff66] to-[#a726e822] rounded-full shadow-[0_0_6px_rgba(0,240,255,0.15)]"></div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00f0ff] rounded-full blur-[1px]"
          animate={{
            scale: hovered ? [1, 1.2, 1] : 1,
            boxShadow: hovered ? "0 0 12px #00f0ff" : "0 0 8px #00f0ff",
          }}
          transition={{
            duration: 1.5,
            repeat: hovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        />

        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#5f5eff]"
            style={{
              left: `${i * 100}%`,
              boxShadow: "0 0 3px #5f5eff",
              opacity: hovered ? 0.8 : 0.4,
            }}
            animate={{
              scale: hovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              repeat: hovered ? Infinity : 0,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
          />
        ))}

        {hovered && (
          <>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3 flex items-center justify-center"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bolt size={10} className="text-[#00f0ff]" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-3 flex items-center justify-center"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bolt size={10} className="text-[#00f0ff]" />
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Index;