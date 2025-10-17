
import { Card } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating visually appealing interfaces with attention to user experience and accessibility."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user interactions."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-secondary dark:text-white mb-4">
              About <span className="text-portfolio-primary">Me</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image and Info */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-2xl transform rotate-6"></div>
                  <img
                    src="public/Profile.jpeg"
                    alt="Adelowo Opeoluwa Ezekiel"
                    className="relative w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-secondary dark:text-white mb-2">
                  Frontend Developer
                </h3>
                <p className="text-portfolio-accent font-medium">
                  Based in Ibadan, Nigeria.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a passionate frontend developer with over 2 years of experience creating 
                  digital experiences that combine beautiful design with robust functionality. 
                  My journey in web development began with a curiosity about how websites work, 
                  and has evolved into a deep appreciation for crafting user-centric solutions.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in React, TypeScript, and modern CSS frameworks, always staying 
                  current with the latest trends and best practices. When I'm not coding, you'll 
                  find me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge with the developer community.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 gap-4 mt-6 sm:mt-8">
                {highlights.map((item, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 border-0">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-portfolio-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-sm sm:text-base text-portfolio-secondary dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
