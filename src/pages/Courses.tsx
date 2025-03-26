
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import CoursesContent from "@/components/CoursesContent";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <CoursesHero />
      <CoursesContent />
      
      <section className="py-16 px-6 bg-wine-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif mb-6">Experience Wine Before You Study</h2>
            <p className="text-lg mb-8 text-cream-50">
              Visit our tasting room to complement your theoretical knowledge with practical sensory experience.
            </p>
            <Link to="/tasting-room">
              <Button size="lg" className="bg-cream-100 text-wine-800 hover:bg-cream-200">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Our Tasting Room
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
