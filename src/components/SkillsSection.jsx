import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Shield, 
  Lock, 
  Code, 
  Server, 
  Cpu, 
  Key, 
  Network, 
  Fingerprint,
  Bug,
  Database,
  Terminal
} from "lucide-react";

const skills = [
  // Cybersecurity
  { name: "Penetration Testing", level: 90, category: "cybersecurity", icon: <Shield className="h-5 w-5" /> },
  { name: "Threat Analysis", level: 85, category: "cybersecurity", icon: <Bug className="h-5 w-5" /> },
  { name: "Network Security", level: 88, category: "cybersecurity", icon: <Network className="h-5 w-5" /> },
  { name: "Cryptography", level: 80, category: "cybersecurity", icon: <Key className="h-5 w-5" /> },
  { name: "Security Compliance", level: 75, category: "cybersecurity", icon: <Lock className="h-5 w-5" /> },
  { name: "Forensics", level: 70, category: "cybersecurity", icon: <Fingerprint className="h-5 w-5" /> },

  // Frontend
  { name: "React", level: 90, category: "frontend", icon: <Code className="h-5 w-5" /> },
  { name: "Flutter", level: 85, category: "frontend", icon: <Code className="h-5 w-5" /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <Code className="h-5 w-5" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <Code className="h-5 w-5" /> },

  // Backend
  { name: "Laravel", level: 80, category: "backend", icon: <Server className="h-5 w-5" /> },
  { name: "Python", level: 75, category: "backend", icon: <Terminal className="h-5 w-5" /> },
  { name: "MySQL", level: 70, category: "backend", icon: <Database className="h-5 w-5" /> },
  
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-gray-900/80 via-blue-900/50 to-purple-900/80 backdrop-blur-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-gray-700/30 p-8 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Technical <span className="text-cyan-400">Expertise</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 border",
                  activeCategory === category.id
                    ? "bg-cyan-600/20 border-cyan-400/50 text-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800/30 hover:bg-cyan-500/10 border border-gray-700/50 hover:border-cyan-400/30 rounded-xl p-5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 group-hover:bg-cyan-500/20">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-700/50 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-2 w-2 rounded-full",
                          i < Math.floor(skill.level / 20) 
                            ? "bg-cyan-400" 
                            : "bg-gray-600"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};