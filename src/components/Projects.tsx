
import Section from "./Section";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "V.A.U.L.T.",
    description:
      "A fintech platform featuring a CNN model for data processing, a financial data API, and both web/mobile interfaces. Built with secure and scalable technologies like Jupyter Notebook and TypeScript.",
    url: "https://github.com/joshuahanielgts/V.A.U.L.T",
    tags: ["Fintech", "CNN", "API", "Web", "Mobile", "TypeScript", "Jupyter"],
  },
  {
    name: "AI Object Detection",
    description:
      "Detects objects in uploaded images using a YOLOv8 model, OpenCV, and more—providing bounding boxes and analytical visualizations. Designed for simple uploads (Google Colab supported).",
    url: "https://github.com/joshuahanielgts/AI-Vision-Detection",
    tags: ["AI", "YOLO", "Computer Vision", "Python", "OpenCV"],
  },
  {
    name: "RoomRoster",
    description:
      "Comprehensive hostel management system: student registration, booking, complaints, feedback, and full admin monitoring. Enables efficient day-to-day operations for college hostels.",
    url: "https://github.com/joshuahanielgts/Hostel-Management-System",
    tags: ["Management", "Web App", "Hostel", "Admin", "Fullstack"],
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((proj) => (
          <a
            key={proj.name}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#22263a88] border border-[#292e4a] glass-morphism p-5 flex flex-col hover:-translate-y-1 transition-transform shadow-xl hover:shadow-2xl"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 font-semibold text-lg text-gray-100">
                <Github size={20} className="inline text-[#8079e0] mr-1" />
                {proj.name}
              </div>
            </div>
            <div className="mb-1 text-zinc-200 text-left">{proj.description}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1e233b] text-[#82eaff] text-xs px-2 py-0.5 rounded-full font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-3 ml-auto text-xs text-[#5f5eff] underline group-hover:text-[#00fff2] transition">View on GitHub</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
