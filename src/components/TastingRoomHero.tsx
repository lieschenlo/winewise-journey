
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";

const TastingRoomHero = () => {
  return (
    <section className="min-h-[40vh] py-20 px-6 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-wine-800 leading-tight mb-4">
              Wine Tasting Room
            </h1>
            
            <p className="text-lg text-wine-600 mb-6 max-w-md">
              Explore curated wine experiences to develop your sensory skills. Enhance your tasting abilities through expert guidance.
            </p>
            
            <Button className="bg-wine-600 hover:bg-wine-700 text-white" size="lg">
              <Wine className="mr-2 h-5 w-5 font-bold" strokeWidth={2.5} />
              Book a Tasting
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-md overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1561662416-ce44446c54c7?q=80&w=1980" 
              alt="Wine tasting experience" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TastingRoomHero;
