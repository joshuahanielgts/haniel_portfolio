
import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu, X, Bolt } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [thunderFlash, setThunderFlash] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Thunder flash effect
  useEffect(() => {
    const flashInterval = setInterval(() => {
      if (Math.random() > 0.8) {  // 20% chance of thunder
        setThunderFlash(true);
        setTimeout(() => setThunderFlash(false), 200);
      }
      
      // Random glitch effect
      if (Math.random() > 0.9) {  // 10% chance of glitch
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 300);
      }
    }, 5000);
    
    return () => clearInterval(flashInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Add smooth scrolling behavior to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href') || "#";
        
        if (href === "#") {
          // Special handling for home link - scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const target = document.querySelector(href);
          if (target) {
            const htmlTarget = target as HTMLElement;
            window.scrollTo({
              top: htmlTarget.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
        
        // Close mobile menu after clicking
        setMobileMenuOpen(false);
      });
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        thunderFlash ? "bg-[#ffffff10]" : (
          scrolled
            ? "bg-[#0d122299] backdrop-blur-xl border-b border-[#5f5eff44]"
            : "bg-transparent"
        ),
        glitchEffect && "animate-cyber-glitch"
      )}
    >
      {/* Top circuit line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a 
          href="#" 
          className="text-lg font-orbitron font-bold tracking-wider uppercase flex items-center group"
        >
          <Bolt className="mr-2 text-[#00f0ff] group-hover:text-[#5f5eff] transition-colors" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#5f5eff] group-hover:from-[#5f5eff] group-hover:to-[#a726e8] transition-all">
            J Joshua Haniel
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm transition-all duration-300 relative group font-orbitron uppercase tracking-wider",
                    activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                      ? "text-[#00f0ff] font-medium"
                      : "text-zinc-300 hover:text-[#00f0ff]"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-[2px]",
                    activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                      ? "bg-[#00f0ff] shadow-[0_0_5px_#00f0ff]"
                      : "bg-transparent group-hover:bg-[#5f5eff55]"
                  )}></span>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="block md:hidden text-[#00f0ff] p-2 rounded-md bg-[#0d122299] backdrop-blur-md border border-[#5f5eff55]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0d122299] backdrop-blur-xl border-b border-[#5f5eff44]"
      >
        <div className="py-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 transition-colors font-orbitron uppercase tracking-wider",
                activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                  ? "text-[#00f0ff] bg-[#5f5eff22] border-l-2 border-[#00f0ff]"
                  : "text-zinc-300 hover:bg-[#5f5eff11] hover:text-[#00f0ff]"
              )}
            >
              <Bolt 
                size={16} 
                className={cn(
                  "mr-2",
                  activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                    ? "opacity-100 text-[#00f0ff]"
                    : "opacity-50"
                )}
              />
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
