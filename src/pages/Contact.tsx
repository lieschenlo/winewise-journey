import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="min-h-[50vh] pt-20 pb-12 px-6 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" 
            alt="Wine barrels in cellar" 
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight mb-4">
              Contact Us
            </h1>
            
            <p className="text-base text-cream-50 mb-6 max-w-md">
              Get in touch with our wine experts for any questions about courses or tastings
            </p>
            
            <Link to="/about-us">
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                <Users className="mr-2 h-4 w-4" />
                About Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-serif font-medium text-wine-800 mb-6">Send Us a Message</h2>
              <p className="text-wine-600 mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button className="bg-wine-600 hover:bg-wine-700 text-white w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl font-serif font-medium text-wine-800 mb-6">Contact Information</h2>
              <p className="text-wine-600 mb-8">
                If you prefer to reach out directly, here's how you can get in touch with us.
              </p>
              
              <div className="space-y-8">
                <Card className="border-cream-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-wine-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-wine-800 mb-1">Call Us</h3>
                        <p className="text-wine-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-wine-500 mt-1">Monday - Friday, 9am - 5pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-cream-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-wine-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-wine-800 mb-1">Email Us</h3>
                        <p className="text-wine-600">info@winelecture.com</p>
                        <p className="text-sm text-wine-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-cream-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-wine-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-wine-800 mb-1">Visit Us</h3>
                        <p className="text-wine-600">123 Vineyard Lane</p>
                        <p className="text-wine-600">Napa Valley, CA 94558</p>
                        <p className="text-sm text-wine-500 mt-1">Open for tastings by appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10">
                <img 
                  src="https://images.unsplash.com/photo-1566903451935-7e5633ee45b9?q=80&w=1974" 
                  alt="Napa Valley Vineyard" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-medium text-wine-800 mb-4">Join Our Wine Community</h2>
            <p className="text-wine-600 mb-6">
              Subscribe to our newsletter for exclusive invitations to tastings, special offers, and wine education tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
