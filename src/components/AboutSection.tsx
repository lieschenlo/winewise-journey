
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-wine-50 blur-3xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1528132596460-41b707c25bf8?q=80&w=1974" 
              alt="Wine glasses and vineyard" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs z-10">
              <div className="flex items-center gap-2 mb-2 text-wine-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <div className="font-medium">Our Philosophy</div>
              </div>
              <p className="text-sm text-gray-600">
                We believe everyone can develop a sophisticated wine palate through guided, experiential learning.
              </p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs z-10">
              <div className="flex items-center gap-2 mb-2 text-wine-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div className="font-medium">Experiential Learning</div>
              </div>
              <p className="text-sm text-gray-600">
                Our courses combine theory with practical tasting experiences for comprehensive understanding.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-wine-600 font-medium mb-2 inline-block">Our Approach</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wine-900 mb-6">
              Cultivating Wine Knowledge Through Experience
            </h2>
            <p className="text-gray-700 mb-6">
              At WineWise, we believe that understanding wine is about more than memorizing facts—it's about experiencing the rich tapestry of flavors, aromas, and traditions that make each bottle unique.
            </p>
            <p className="text-gray-700 mb-8">
              Our team of sommeliers, winemakers, and educators brings decades of collective experience to create courses that are accessible, engaging, and comprehensive. Whether you're a complete beginner or looking to refine your palate, our structured approach ensures you'll develop confidence in your wine knowledge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-wine-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800 mb-1">Expert Instruction</h3>
                  <p className="text-sm text-gray-600">Learn from certified sommeliers and wine experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-wine-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800 mb-1">Interactive Tastings</h3>
                  <p className="text-sm text-gray-600">Guided tastings with detailed tasting notes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-wine-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800 mb-1">Community Focus</h3>
                  <p className="text-sm text-gray-600">Connect with fellow wine enthusiasts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-wine-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-wine-800 mb-1">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">Monitor your learning journey with assessments</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-wine-600 hover:bg-wine-700 text-white">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
