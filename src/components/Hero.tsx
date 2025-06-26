
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-portfolio-accent/20 to-portfolio-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 pt-16 pb-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <p className="text-portfolio-primary dark:text-portfolio-accent font-medium mb-3 sm:mb-4 text-base sm:text-lg animate-slide-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-portfolio-secondary dark:text-white mb-4 sm:mb-6 leading-tight">
            Adelowo <span className="text-portfolio-primary block sm:inline">Opeoluwa</span> Ezekiel
          </h1>
          
          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-portfolio-gray-medium dark:text-gray-400 mb-4 sm:mb-6 font-light px-4">
            Frontend Developer & UI/UX Enthusiast
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            I craft beautiful, responsive web experiences with modern technologies. 
            Passionate about creating intuitive user interfaces that combine functionality with aesthetic appeal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-8 sm:mb-12 px-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto bg-portfolio-primary hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
              <a
                href="/Ope CV2.pdf"
                download
                >
              <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                 >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 px-4">
            <a
              href="https://github.com/Ezekiel249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/opeoluwa-adelowo-756920331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
