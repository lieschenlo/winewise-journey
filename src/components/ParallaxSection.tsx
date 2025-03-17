
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
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section 
      ref={ref}
      className="min-h-[500px] relative flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574')",
          y,
          opacity
        }}
      />
      
      <div className="absolute inset-0 bg-wine-900/60 z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Wine Journey Through Expert-Led Lectures
        </motion.h2>
        <motion.p 
          className="text-white/90 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From vineyard to glass, our comprehensive lectures will guide you through every step of the wine-making process and tasting experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="bg-cream-500 hover:bg-cream-600 text-wine-900 font-medium py-6 px-8 text-lg">
            Join Our Next Lecture
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
