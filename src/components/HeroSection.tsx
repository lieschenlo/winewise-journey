
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cream-50 z-0"></div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-wine-100/50 blur-[120px] opacity-60 z-0"></div>
      <div className="absolute top-64 left-0 w-80 h-80 rounded-full bg-cream-200/30 blur-[100px] opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.h1 
            className="font-serif text-5xl md:text-6xl font-bold text-wine-800 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Art of Wine
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert lectures to elevate your wine knowledge from novice to connoisseur
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-wine-600 hover:bg-wine-700 text-white py-6 px-8 text-lg">
              Explore Lectures
            </Button>
            <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50 py-6 px-8 text-lg">
              Join Tasting
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
            className="rounded-2xl shadow-xl object-cover h-[550px]"
          />
          
          <motion.div 
            className="absolute p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg max-w-xs bottom-10 -left-8 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="font-medium text-wine-800 mb-1">Guided by Experts</div>
            <p className="text-sm text-gray-700">
              Learn from certified sommeliers with over 20 years of experience
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
