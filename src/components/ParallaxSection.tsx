
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
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <section 
      ref={ref}
      className="min-h-[400px] relative flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1568213816046-0a1665a28508?q=80&w=2072')",
          y,
          opacity
        }}
      />
      
      <div className="absolute inset-0 bg-wine-800/50 backdrop-blur-sm z-10"></div>
      
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6">
        <motion.p 
          className="text-white/90 text-lg mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From vineyard to glass
        </motion.p>
        <motion.h2 
          className="font-serif text-3xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Wine Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="bg-white hover:bg-cream-100 text-wine-900 font-medium">
            Join Our Next Lecture
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
