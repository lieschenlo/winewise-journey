
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";

const TastingRoomHero = () => {
  return (
    <section className="min-h-[60vh] pt-20 pb-12 px-6 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1567072363923-5333ab905882?q=80&w=2070" 
          alt="Wine tasting experience" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight mb-4">
            Wine Tasting Room
          </h1>
          
          <p className="text-base text-cream-50 mb-6 max-w-md">
            Explore curated wine experiences to develop your sensory skills
          </p>
          
          <Button className="bg-cream-100 text-wine-800 hover:bg-cream-200" size="lg">
            <Wine className="mr-2 h-5 w-5" />
            Book a Tasting
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TastingRoomHero;
