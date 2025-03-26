
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TastingRoomHero from "@/components/TastingRoomHero";
import FoodPairing from "@/components/FoodPairing";
import BookTasting from "@/components/BookTasting";
import CuratedRecommendations from "@/components/CuratedRecommendations";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TastingRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <TastingRoomHero />
      <FoodPairing />
      <BookTasting />
      <CuratedRecommendations />
      
      <section className="py-16 px-6 bg-wine-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif mb-6">Ready to Elevate Your Wine Knowledge?</h2>
            <p className="text-lg mb-8 text-cream-50">
              Our tasting experiences complement the WSET curriculum, providing practical sensory training 
              to help you succeed in your wine education journey.
            </p>
            <Link to="/courses">
              <Button size="lg" className="bg-cream-100 text-wine-800 hover:bg-cream-200">
                <BookOpen className="mr-2 h-5 w-5" />
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
