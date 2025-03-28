
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      
      <TeamSection />
      
      <Footer />
    </div>
  );
};

export default AboutUs;
