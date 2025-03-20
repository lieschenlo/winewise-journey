
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-medium text-gray-800 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Art of Wine
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert lectures for wine enthusiasts
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white py-6 px-8">
              Explore Lectures
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" 
            alt="Wine glass" 
            className="rounded-sm shadow-lg object-cover h-[550px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
