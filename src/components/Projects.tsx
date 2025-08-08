
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A comprehensive Web Application that allows users to buy and sell products or services securely over the internet. It features a user-friendly interface, secure payment processing, and an admin dashboard for managing products and orders.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://sowerventures.netlify.app",
      githubUrl: "https://github.com/Ezekiel249/Sower-Ventures"
    },
    {
      title: "IITA Asset Management System",
      description: "A collaborative asset management system for IITA with good UI and ASSET tracking with a well secured Backend.",
      image: "https://20597294.fs1.hubspotusercontent-na1.net/hub/20597294/hubfs/1.%20Exploring%20IT%20asset%20management.png?width=1062&name=1.%20Exploring%20IT%20asset%20management.png",
      tech: ["React", "Node.JS", "MySql", "Chart.js"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      title: "Laravel Authors & Books Management System",
      description: "A Authors & Books Management System (Backend)",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgugz59c6y3zzc5pdptcr.png",
      tech: [ "API Security", "Laravel", "php"],
      liveUrl: "",
      githubUrl: "https://github.com/Ezekiel249/restful-api"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-secondary dark:text-white mb-4">
              Featured <span className="text-portfolio-primary">Projects</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-portfolio-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in frontend development, 
              UI/UX design, and problem-solving abilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4 p-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 text-black hover:bg-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 text-black hover:bg-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-portfolio-secondary dark:text-white mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-xs sm:text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <a
            href='https://github.com/Ezekiel249'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            > 
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
