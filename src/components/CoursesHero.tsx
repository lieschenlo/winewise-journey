
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="min-h-[80vh] pt-24 pb-16 px-6 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070" 
          alt="Wine education setting" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl ml-auto text-right"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
            Wine Courses
          </h1>
          
          <p className="text-lg text-cream-50 mb-10 max-w-lg ml-auto">
            Comprehensive wine education designed to help you build knowledge and prepare for WSET certifications
          </p>
          
          <Button className="bg-wine-600 hover:bg-wine-700 text-white" size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            View Curriculum
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesHero;
