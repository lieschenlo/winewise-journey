
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="min-h-[50vh] pt-20 pb-12 px-6 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1964" 
            alt="Wine education setting" 
            className="w-full h-full object-cover brightness-90"
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
              About Us
            </h1>
            
            <p className="text-base text-cream-50 mb-6 max-w-md">
              Meet the team behind WineLecture, passionate educators dedicated to wine excellence
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-wine-600 max-w-2xl mx-auto">
              Our passion for wine and education brought us together to create WineLecture, 
              where we combine our expertise to offer exceptional wine learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-md overflow-hidden shadow-sm"
            >
              <div className="relative h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1964" 
                  alt="Felix, Wine Expert & Educator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-wine-800 mb-2">Felix Weber</h3>
                <p className="text-wine-600 font-medium mb-2">WSET Certified Educator & Sommelier</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in the wine industry and a background in hospitality management, 
                  Felix brings extensive knowledge and a passion for making wine education accessible to all. 
                  He has worked in renowned vineyards across Europe before founding WineLecture.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                    Contact Felix
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-md overflow-hidden shadow-sm"
            >
              <div className="relative h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1974" 
                  alt="Lisa-Marie, Director of Education" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-wine-800 mb-2">Lisa-Marie Fischer</h3>
                <p className="text-wine-600 font-medium mb-2">Director of Education & WSET Diploma Holder</p>
                <p className="text-gray-600 mb-4">
                  Lisa-Marie combines her WSET Diploma expertise with a background in educational psychology 
                  to develop our curriculum. Her innovative teaching approaches and deep understanding of wine 
                  regions worldwide have made our courses both engaging and comprehensive.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                    Contact Lisa-Marie
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Get in Touch With Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
