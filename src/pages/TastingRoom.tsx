
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TastingRoomHero from "@/components/TastingRoomHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Calendar, GlassWater } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TastingRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <TastingRoomHero />
      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-serif font-medium text-wine-800 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Tasting Experiences
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <AspectRatio ratio={4/3} className="bg-cream-50">
                  <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070" 
                    alt="Food and wine pairing" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Utensils className="h-5 w-5 text-wine-600" strokeWidth={2.5} />
                <h3 className="text-xl font-serif font-medium text-wine-800">Food & Wine Pairing</h3>
              </div>
              <p className="text-wine-600 mb-6 flex-grow">
                Discover perfect harmony between cuisine and wine with our expert-guided pairing experiences.
              </p>
              <Link to="/food-pairing">
                <Button variant="outline" className="w-full group border-wine-300 text-wine-700 hover:bg-wine-50">
                  Explore Pairings
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <AspectRatio ratio={4/3} className="bg-cream-50">
                  <img 
                    src="https://images.unsplash.com/photo-1527151934151-1a21ed3eace6?q=80&w=2074" 
                    alt="Wine tasting calendar" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-wine-600" strokeWidth={2.5} />
                <h3 className="text-xl font-serif font-medium text-wine-800">Reserve Your Spot</h3>
              </div>
              <p className="text-wine-600 mb-6 flex-grow">
                Book a seat at our tasting table for guided educational tastings with our wine experts.
              </p>
              <Link to="/book-tasting">
                <Button variant="outline" className="w-full group border-wine-300 text-wine-700 hover:bg-wine-50">
                  Book a Tasting
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <AspectRatio ratio={4/3} className="bg-cream-50">
                  <img 
                    src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070" 
                    alt="Wine glass collection" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <GlassWater className="h-5 w-5 text-wine-600" strokeWidth={2.5} />
                <h3 className="text-xl font-serif font-medium text-wine-800">Curated Recommendations</h3>
              </div>
              <p className="text-wine-600 mb-6 flex-grow">
                Explore our experts' selection of exceptional wines to enhance your tasting journey.
              </p>
              <Link to="/recommendations">
                <Button variant="outline" className="w-full group border-wine-300 text-wine-700 hover:bg-wine-50">
                  View Recommendations
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif mb-6">Ready to Elevate Your Wine Knowledge?</h2>
            <p className="text-lg mb-8 text-wine-600">
              Our tasting experiences complement the WSET curriculum, providing practical sensory training 
              to help you succeed in your wine education journey.
            </p>
            <Link to="/courses">
              <Button size="lg" className="bg-wine-600 hover:bg-wine-700 text-white">
                Explore Our Wine Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TastingRoom;
