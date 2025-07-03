
import { Card, CardContent } from '@/components/ui/card';


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "💛" },
        { name: "HTML5", level: 98, icon: "🟠" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "PHP/Laravel", level: 50, icon: "⚡" }
      ]
    },
    {
      title: "Styling",
      skills: [
        { name: "Tailwind CSS", level: 95, icon: "🎯" },
        { name: "Sass/SCSS", level: 80, icon: "💗" },
        { name: "Styled Components", level: 75, icon: "💅" },
        { name: "CSS Modules", level: 85, icon: "📦" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 88, icon: "🌿" },
        { name: "Webpack", level: 70, icon: "📦" },
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "Figma", level: 30, icon: "🎨" },
        { name: "REST APIs", level: 80, icon: "🔗" },
        { name: "Node.js", level: 80, icon: "🔗" }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number; icon: string } }) => (
    <div className="mb-3 sm:mb-4">
      <div className="flex items-center justify-between mb-1 sm:mb-2">
        <span className="flex items-center text-portfolio-secondary dark:text-white font-medium text-sm sm:text-base">
          <span className="mr-2 text-base sm:text-lg">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-portfolio-primary font-semibold text-sm sm:text-base">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
        <div
          className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-secondary dark:text-white mb-4">
              Skills & <span className="text-portfolio-primary">Expertise</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-portfolio-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to bring ideas to life and create amazing web experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 border-0"
              >
                <CardContent className="p-0">
                  <h3 className="text-lg sm:text-xl font-bold text-portfolio-secondary dark:text-white mb-4 sm:mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 sm:mt-16">
            <Card className="max-w-4xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5 border-0">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-secondary dark:text-white mb-3 sm:mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  I believe in continuous learning and staying updated with the latest trends in web development. 
                  Currently exploring: Next.js, GraphQL, and Three.js for creating immersive web experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
