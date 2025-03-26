
import { motion } from "framer-motion";

const CoursesHero = () => {
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
            Wine Courses
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive wine education courses are designed to help you build knowledge and prepare 
            for WSET (Wine & Spirit Education Trust) certifications, the global standard in wine education.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cream-50 border border-cream-100 rounded-lg p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-serif text-wine-700 mb-4">Why Study for WSET Qualifications?</h2>
          <p className="text-gray-700 mb-4">
            WSET qualifications are globally recognized as the international standard in wine and spirit knowledge. 
            Whether you're looking to start a career in the wine industry or simply enhance your appreciation as an enthusiast, 
            our courses provide structured learning paths from beginner to expert level.
          </p>
          <p className="text-gray-700">
            Each level builds on the previous one, offering a comprehensive foundation in wine styles, 
            regions, tasting methodology, and service techniques that will prepare you for success in your exams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesHero;
