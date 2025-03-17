
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506377295141-e428b97a6973?q=80&w=2070')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 rounded-full bg-cream-200 blur-[120px] opacity-40 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-wine-300 blur-[120px] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.span 
            className="text-wine-600 font-medium mb-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master the art of wine appreciation
          </motion.span>
          
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-wine-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Journey into the <span className="text-wine-500">World of Wine</span> Starts Here
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our comprehensive wine education platform and transform your wine experience. From novice to connoisseur, our interactive courses guide you through every step.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="bg-wine-600 hover:bg-wine-700 text-white py-6 px-8 text-lg">
              Explore Courses
            </Button>
            <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50 py-6 px-8 text-lg">
              Take a Free Tasting
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i + 10}.jpg`} 
                    alt="Student" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="font-medium">Join 2,000+ wine enthusiasts</div>
              <div className="text-sm text-gray-500">Learning daily about wine</div>
            </div>
          </motion.div>
        </div>
        
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" 
              alt="Wine glasses" 
              className="rounded-2xl shadow-2xl max-w-md"
            />
            <div className="absolute -inset-4 rounded-2xl animate-image-glow"></div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-10 -left-10 p-4 bg-white rounded-xl shadow-lg max-w-xs z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="font-medium">Interactive Learning</div>
            </div>
            <p className="text-sm text-gray-600">
              Our courses combine videos, tastings, and quizzes for an engaging experience.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute -top-10 -right-10 p-4 bg-white rounded-xl shadow-lg max-w-xs z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="font-medium">Expert Guidance</div>
            </div>
            <p className="text-sm text-gray-600">
              Learn from certified sommeliers and wine experts with years of experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
