
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Wine Pairing",
    description: "Perfect combinations for any occasion",
    image: "https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?q=80&w=2070",
  },
  {
    id: 2,
    title: "Courses",
    description: "Comprehensive wine education",
    image: "https://images.unsplash.com/photo-1560148218-1a83060f7b32?q=80&w=2070",
  },
  {
    id: 3,
    title: "Tastings",
    description: "Guided sensory experiences",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
  },
];

const CourseCategories = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-medium text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore Wine Topics
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-1">{category.title}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
