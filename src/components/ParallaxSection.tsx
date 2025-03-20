
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      ref={ref}
      className="min-h-[350px] relative flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1568213816046-0a1665a28508?q=80&w=2072')",
          y,
          opacity
        }}
      />
      
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10"></div>
      
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join Our Next Lecture
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-8">
            Register Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
