import Section from "./Section";
export default function About() {
  return <Section id="about" title="About">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img src="/lovable-uploads/839d78df-9ba8-4203-b3a5-4b260f8cb82b.png" alt="J Joshua Haniel" className="w-24 h-24 rounded-xl border-2 border-[#464cf3] shadow-xl object-cover mb-4 md:mb-0" />
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            Hi, I am J. Joshua Haniel
            <span className="block text-[#7b74fd] text-lg mt-1">Software Developer Intern</span>
          </h2>
          <p className="text-zinc-300 mb-2">
            A 19-year-old student at SRM University in Chennai, pursuing a Computer Science and Engineering degree. I have a passion for software development and problem-solving, which drives me to create innovative solutions. Throughout my studies, I've worked on various projects that apply my theoretical knowledge to practical contexts.
          </p>
          <p className="text-zinc-400 mb-2">
            I am also involved in college activities that enhance my leadership and teamwork skills, and I prioritize continuous learning by exploring new technologies. You can find my projects and connect with me on GitHub and LinkedIn, which reflect my journey as an aspiring software developer.
          </p>
          
          {/* Education Section */}
          <div className="mt-4 mb-3">
            <h3 className="text-[#ada7ff] text-lg font-semibold mb-2">Education</h3>
            <ul className="space-y-3">
              <li className="pl-3 border-l-2 border-[#5f5eff]">
                <div className="text-zinc-200 font-medium">B.Tech in Computer Science and Engineering</div>
                <div className="text-zinc-400 text-sm">SRM Institute of Science and Technology, Chennai</div>
                <div className="text-zinc-500 text-xs">2023 - Present</div>
              </li>
              <li className="pl-3 border-l-2 border-[#5f5eff]">
                <div className="text-zinc-200 font-medium">Higher Secondary Education</div>
                <div className="text-zinc-400 text-sm">MCC Matric. Hr. Sec. School</div>
                <div className="text-zinc-500 text-xs">2021 - 2023</div>
              </li>
            </ul>
          </div>
          
          <ul className="mt-4 flex flex-wrap gap-3 text-zinc-500 text-xs">
            <li>
              <span className="font-mono text-[#ada7ff]">🎓 SRM University, Chennai</span>
            </li>
            <li>
              <span className="font-mono text-[#ada7ff]">📍 India</span>
            </li>
            <li>
              <span className="font-mono">🐙 GitHub: <a className="text-[#7b74fd] underline" href="https://github.com/joshuahanielgts" target="_blank" rel="noopener noreferrer">@joshuahanielgts</a></span>
            </li>
            <li>
              <span className="font-mono">💼 LinkedIn: <a className="text-[#7b74fd] underline" href="https://www.linkedin.com/in/joshuahanielgts" target="_blank" rel="noopener noreferrer">joshuahanielgts</a></span>
            </li>
          </ul>
        </div>
      </div>
    </Section>;
}