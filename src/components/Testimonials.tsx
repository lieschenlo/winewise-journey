
import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Wine Enthusiast",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "WineLecture transformed my wine experience. I passed the WSET exams.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "The insights on wine pairing revolutionized our restaurant's menu.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-2xl font-medium text-gray-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm p-5 shadow-sm"
            >
              <p className="text-gray-700 mb-4 text-sm">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-medium text-sm text-gray-800">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
