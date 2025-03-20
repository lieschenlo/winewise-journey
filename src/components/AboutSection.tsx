
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-cream-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-wine-600 font-medium mb-2 inline-block">Our Approach</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-wine-900 mb-6">
              Learn Wine Through Experience
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              At WineLecture, we believe that understanding wine comes through experiencing it. Our courses combine essential knowledge with guided tastings to build your confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800">Expert Instruction</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800">Interactive Tastings</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800">Community Focus</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800">Progress Tracking</h3>
                </div>
              </div>
            </div>
            
            <Button className="bg-white hover:bg-cream-100 text-wine-800 border border-wine-200">
              About Our Methods
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1528132596460-41b707c25bf8?q=80&w=1974" 
              alt="Wine glasses and vineyard" 
              className="rounded-md shadow-md w-full object-cover"
              style={{ maxHeight: "500px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
