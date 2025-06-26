
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adelowopeoluwa249@gmail.com",
      link: "mailto:adelowopeoluwa249@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 9075624905",
      link: "tel:+2349075624905"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ibadan, Nigeria",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Ezekiel249",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/opeoluwa-adelowo-756920331",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/AdelowoEzekiel",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-secondary dark:text-white mb-4">
              Get In <span className="text-portfolio-primary">Touch</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-portfolio-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="p-6 sm:p-8 bg-white dark:bg-gray-900 border-0 shadow-lg order-2 lg:order-1">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-secondary dark:text-white mb-4 sm:mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-portfolio-primary text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-portfolio-primary text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-portfolio-primary text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-gray-300 dark:border-gray-600 focus:border-portfolio-primary resize-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-portfolio-primary hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <Card className="p-6 sm:p-8 bg-white dark:bg-gray-900 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-secondary dark:text-white mb-4 sm:mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-portfolio-secondary dark:text-white text-sm sm:text-base">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors duration-200 text-sm sm:text-base break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-6 sm:p-8 bg-white dark:bg-gray-900 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-secondary dark:text-white mb-4 sm:mb-6">
                    Follow Me
                  </h3>
                  
                  <div className="flex space-x-4 sm:space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      >
                        <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="p-6 sm:p-8 bg-gradient-to-r from-portfolio-primary to-portfolio-accent text-white border-0">
                <CardContent className="p-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    Available for Freelance
                  </h3>
                  <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
                    I'm currently available for freelance projects and full-time opportunities.
                  </p>
                  <a
                    href="https://wa.me/2349075624905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="secondary"
                      className="w-full sm:w-auto bg-white text-portfolio-primary hover:bg-gray-100 text-sm sm:text-base"
                    >
                      Let's Work Together
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
