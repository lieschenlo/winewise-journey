
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="min-h-[40vh] py-20 px-6 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-wine-800 leading-tight mb-4">
              Wine Courses
            </h1>
            
            <p className="text-lg text-wine-600 mb-6 max-w-md">
              Comprehensive wine education designed for WSET certifications. Learn from industry experts in a structured environment.
            </p>
            
            <Button className="bg-wine-600 hover:bg-wine-700 text-white" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              View Curriculum
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-md overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070" 
              alt="Wine education setting" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
