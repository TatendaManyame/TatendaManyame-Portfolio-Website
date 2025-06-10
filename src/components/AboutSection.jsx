import { Shield, Lock, Network, Fingerprint, Bug, Key } from "lucide-react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-white">
      {/* Starry Background - Dark stars for white background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-800 animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 overflow-hidden"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            About{" "}
            <span className="text-blue-600">
              {["M", "e"].map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Cybersecurity Specialist & Ethical Hacker
              </h3>

              <p className="text-gray-600">
                With over 2 years of experience in cybersecurity, I specialize in
                penetration testing, vulnerability assessment, and implementing
                robust security frameworks for enterprise systems and applications.
              </p>

              <p className="text-gray-600">
                My expertise lies in identifying system weaknesses before malicious
                actors do, and developing comprehensive defense strategies to protect
                critical digital assets and infrastructure.
              </p>

              <p className="text-gray-600">
                Certified in OSCP, CISSP, and CEH, I stay at the forefront of
                cybersecurity threats and countermeasures through continuous research
                and training.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 border border-blue-200">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-800">Penetration Testing</h4>
                    <p className="text-gray-600">
                      Conducting authorized simulated attacks to evaluate system security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 border border-blue-200">
                    <Bug className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-800">Vulnerability Assessment</h4>
                    <p className="text-gray-600">
                      Identifying, quantifying, and prioritizing system vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 border border-blue-200">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-800">Security Architecture</h4>
                    <p className="text-gray-600">
                      Designing and implementing secure network and system infrastructures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};