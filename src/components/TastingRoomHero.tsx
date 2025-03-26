
import { motion } from "framer-motion";

const TastingRoomHero = () => {
  return (
    <section className="pt-28 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-wine-800 mb-6">
            Wine Tasting Room
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our curated collection of tasting notes, wine reviews, and insights to enhance your 
            wine appreciation journey and develop your sensory evaluation skills.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cream-50 border border-cream-100 rounded-lg p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-serif text-wine-700 mb-4">The Art of Wine Tasting</h2>
          <p className="text-gray-700 mb-4">
            Professional wine tasting involves systematic evaluation of a wine's appearance, aroma, flavor, and finish.
            Through practice and guidance, you can develop the vocabulary and sensory skills needed for WSET examinations.
          </p>
          <p className="text-gray-700">
            Our tasting notes follow the WSET Systematic Approach to Tasting (SAT), providing you with real-world examples 
            of how to assess and describe different wine styles from around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TastingRoomHero;
