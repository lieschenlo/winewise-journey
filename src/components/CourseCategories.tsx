
import { motion } from "framer-motion";
import { Wine, GraduationCap, Grape, Map } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: <Wine className="w-8 h-8" />,
    title: "Wine Tasting",
    description: "Learn the sensory techniques to appreciate wine like a professional",
    color: "bg-wine-50 text-wine-700",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Wine Education",
    description: "Master the fundamentals of viticulture and wine production",
    color: "bg-cream-50 text-wine-700",
  },
  {
    id: 3,
    icon: <Grape className="w-8 h-8" />,
    title: "Grape Varieties",
    description: "Discover the unique characteristics of the world's wine grapes",
    color: "bg-wine-50 text-wine-700",
  },
  {
    id: 4,
    icon: <Map className="w-8 h-8" />,
    title: "Wine Regions",
    description: "Explore the terroir and traditions of wine regions worldwide",
    color: "bg-cream-50 text-wine-700",
  },
];

const CourseCategories = () => {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-wine-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Wine Lectures
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our specialized courses designed to enhance your knowledge in every aspect of wine appreciation
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className={`${category.color} rounded-xl p-8 shadow-lg hover-scale`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-700">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
