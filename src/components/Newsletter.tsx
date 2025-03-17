
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!", {
        description: "You'll receive our weekly wine tips and course updates."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-wine-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-wine-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-wine-700 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wine-600 blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Enhance Your Wine Journey
          </h2>
          <p className="text-wine-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for expert tips, course updates, and exclusive wine offers delivered straight to your inbox.
          </p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-wine-700/50 border-wine-600 text-white placeholder:text-wine-300 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-cream-400 hover:bg-cream-500 text-wine-900 whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </div>
          <p className="text-wine-300 text-sm mt-3 text-center">
            We respect your privacy and will never share your information.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
