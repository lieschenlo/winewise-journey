
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="py-16 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-wine-600 max-w-2xl mx-auto">
            Our passion for wine and education brought us together to create WineLecture, 
            where we combine our expertise to offer exceptional wine learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-md overflow-hidden shadow-sm"
          >
            <div className="relative h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1974" 
                alt="Felix, Wine Expert & Sommelier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium text-wine-800 mb-2">Felix</h3>
              <p className="text-wine-600 font-medium mb-2">WSET Certified Educator & Sommelier</p>
              <p className="text-gray-600 mb-4">
                Felix is a Master Sommelier with the WSET Wine Diploma. 
                He came up with the idea for this platform to support people in their 
                learning journey and share his passion for wine.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                  Contact Felix
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-md overflow-hidden shadow-sm"
          >
            <div className="relative h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1534278931827-8a259344abe7?q=80&w=2070" 
                alt="Lisa-Marie, Content & Design Lead" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium text-wine-800 mb-2">Lisa-Marie</h3>
              <p className="text-wine-600 font-medium mb-2">Content & Design Lead</p>
              <p className="text-gray-600 mb-4">
                Lisa-Marie implemented the concept and developed a modern, 
                engaging platform that brings wine knowledge closer to enthusiasts.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                  Contact Lisa-Marie
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button className="bg-wine-600 hover:bg-wine-700 text-white">
              Get in Touch With Our Team
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
