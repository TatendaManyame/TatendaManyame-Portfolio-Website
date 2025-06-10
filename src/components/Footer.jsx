import { ArrowUp, Shield, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900/80 via-blue-900/50 to-purple-900/80 backdrop-blur-lg border-t border-gray-700/50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Branding with Security Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
              <Shield className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.T.A.M Technologies<span className="text-cyan-400">.com</span></h3>
              <p className="text-sm text-gray-400">Secure Digital Solutions</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-300 hover:text-cyan-400" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-cyan-400" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-gray-300 hover:text-cyan-400" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-300 hover:text-cyan-400" />
            </a>
          </div>

          {/* Back to Top Button */}
          <a
            href="#hero"
            className="p-3 rounded-full bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-6" />

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} BTAMtech.co. All security rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Security Standards
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-transparent"></div>
    </footer>
  );
};