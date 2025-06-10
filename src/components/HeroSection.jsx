import { ArrowDown, Shield, Lock, Terminal, Mail, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/10 backdrop-blur-sm"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700/30 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-8">
            <div className="flex justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-cyan-400" />
              <Lock className="h-8 w-8 text-cyan-400" />
              <Terminal className="h-8 w-8 text-cyan-400" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in text-white">Hi, I'm</span>
              <span className="text-cyan-400 opacity-0 animate-fade-in-delay-1">
                {" "}
                Tatenda
              </span>
              <span className="text-white ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Manyame
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Cybersecurity Specialist | Ethical Hacker | Penetration Tester
              <br />
              Securing digital infrastructures through proactive defense strategies
              and vulnerability assessment.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 opacity-0 animate-fade-in-delay-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium text-white transition-colors shadow-lg shadow-cyan-500/20 border border-cyan-400/30"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
              
              <a
                href=""
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-colors"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Explore</span>
        <ArrowDown className="h-5 w-5 text-cyan-400" />
      </div>
    </section>
  );
};