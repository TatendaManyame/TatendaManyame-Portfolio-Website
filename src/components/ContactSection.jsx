import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md rounded-xl border border-gray-300/70 shadow-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
            Get In <span className="text-blue-600">Touch</span>
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a
                      href="mailto:hello@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      tatendamanyame@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +971567690177
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-blue-100">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <span className="text-gray-600">
                      Uae, Dubai
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium mb-4 text-gray-800">Connect With Me</h4>
                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: <Linkedin className="h-5 w-5" />, color: "text-blue-700" },
                      { icon: <Twitter className="h-5 w-5" />, color: "text-sky-500" },
                      { icon: <Instagram className="h-5 w-5" />, color: "text-pink-600" },
                      { icon: <Twitch className="h-5 w-5" />, color: "text-purple-600" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        target="_blank"
                        className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-md",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};