
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TastingRoomHero from "@/components/TastingRoomHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Calendar, GlassWater } from "lucide-react";

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
            className="text-3xl font-serif font-medium text-wine-800 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Tasting Experiences
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm border border-cream-100 p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                <Utensils className="h-10 w-10 text-wine-600" />
              </div>
              <h3 className="text-xl font-serif font-medium text-wine-800 mb-3">Food & Wine Pairing</h3>
              <p className="text-wine-600 mb-6 flex-grow">
                Discover perfect harmony between cuisine and wine with our expert-guided pairing experiences.
              </p>
              <Link to="/food-pairing">
                <Button className="w-full group" variant="outline">
                  Explore Pairings
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-cream-100 p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                <Calendar className="h-10 w-10 text-wine-600" />
              </div>
              <h3 className="text-xl font-serif font-medium text-wine-800 mb-3">Reserve Your Spot</h3>
              <p className="text-wine-600 mb-6 flex-grow">
                Book a seat at our tasting table for guided educational tastings with our wine experts.
              </p>
              <Link to="/book-tasting">
                <Button className="w-full group" variant="outline">
                  Book a Tasting
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-cream-100 p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                <GlassWater className="h-10 w-10 text-wine-600" />
              </div>
              <h3 className="text-xl font-serif font-medium text-wine-800 mb-3">Curated Recommendations</h3>
              <p className="text-wine-600 mb-6 flex-grow">
                Explore our experts' selection of exceptional wines to enhance your tasting journey.
              </p>
              <Link to="/recommendations">
                <Button className="w-full group" variant="outline">
                  View Recommendations
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
