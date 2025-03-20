
import { motion } from "framer-motion";
import { Wine, GraduationCap, Grape, Map } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: <Wine className="w-6 h-6" />,
    title: "Tasting",
    description: "Sensory techniques for wine appreciation",
    color: "bg-white text-wine-700 border border-wine-100 shadow-sm",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education",
    description: "Fundamentals of viticulture and production",
    color: "bg-white text-wine-700 border border-wine-100 shadow-sm",
  },
  {
    id: 3,
    icon: <Grape className="w-6 h-6" />,
    title: "Varieties",
    description: "Unique grape characteristics worldwide",
    color: "bg-white text-wine-700 border border-wine-100 shadow-sm",
  },
  {
    id: 4,
    icon: <Map className="w-6 h-6" />,
    title: "Regions",
    description: "Terroir and traditions of wine regions",
    color: "bg-white text-wine-700 border border-wine-100 shadow-sm",
  },
];

const CourseCategories = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream-50 to-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl font-bold text-wine-800 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore Wine Topics
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.color} rounded-xl p-6 hover-scale`}
            >
              <div className="mb-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium mb-1">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
