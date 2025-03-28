
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="min-h-[60vh] pt-28 pb-12 px-6 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1568213816046-0a1366d0c6ac?q=80&w=2070" 
            alt="Wine education setting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="h-1 w-12 bg-cream-100 mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
              About Us
            </h1>
            
            <p className="text-lg text-cream-50 mb-8 max-w-xl">
              Meet the team behind WineLecture, passionate educators dedicated to wine excellence
            </p>
          </motion.div>
        </div>
      </section>
      
      <TeamSection />
      
      <Footer />
    </div>
  );
};

export default AboutUs;
