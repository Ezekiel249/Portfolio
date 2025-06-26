
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Ezekiel249"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/opeoluwa-adelowo-756920331"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/AdelowoEzekiel"
    }
  ];

  return (
    <footer className="bg-portfolio-secondary dark:bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="text-center sm:text-left">
              <div className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
                AOE<span className="text-portfolio-primary">.</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Frontend Developer passionate about creating beautiful, 
                functional web experiences that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-portfolio-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Connect With Me</h3>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-portfolio-primary transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0">
              <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left ">
                © {currentYear} Adelowo Opeoluwa. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
