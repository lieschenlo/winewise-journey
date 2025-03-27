
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import CoursesContent from "@/components/CoursesContent";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
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
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-cream-100 p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-serif font-medium text-wine-800 mb-2">Mastering Wine & Business</h2>
                <p className="text-wine-600">
                  Explore our most advanced Level 4 Diploma program for wine industry professionals
                </p>
              </div>
              <Link to="/level4">
                <Button className="bg-wine-600 hover:bg-wine-700 text-white group">
                  View Diploma Program
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
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
