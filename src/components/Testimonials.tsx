
import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Wine Enthusiast",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "WineWise transformed my wine experience. I went from barely knowing the difference between red and white to confidently selecting bottles for any occasion.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "The courses on wine pairing revolutionized our restaurant's menu. Our customers are thrilled with our new wine recommendations that perfectly complement their meals.",
  },
  {
    id: 3,
    name: "Sarah Martinez",
    role: "Sommelier in Training",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "As someone pursuing professional certification, I found these courses incredibly thorough and engaging. The interactive tastings were particularly valuable.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-wine-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-wine-100 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cream-100 blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-wine-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from wine enthusiasts who've enhanced their appreciation and knowledge through our courses.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover-scale"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-wine-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0489 3.92707C5.40612 3.92707 0.837646 8.49554 0.837646 14.1383V20.073H6.77232V14.1383H3.81148C3.81148 10.1294 7.03992 6.90101 11.0489 6.90101V3.92707ZM21.3826 3.92707C15.7399 3.92707 11.1714 8.49554 11.1714 14.1383V20.073H17.106V14.1383H14.1452C14.1452 10.1294 17.3736 6.90101 21.3826 6.90101V3.92707Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-medium text-wine-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
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
