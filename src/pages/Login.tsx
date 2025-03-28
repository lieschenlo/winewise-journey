
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate the user
    // For now, we'll simulate successful login
    toast({
      title: "Login successful",
      description: "Welcome back to WineLecture!",
    });
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="min-h-[60vh] pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513618827672-0d7f15347e93?q=80&w=2070" 
            alt="Wine cellar" 
            className="w-full h-full object-cover brightness-80"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-md mx-auto w-full relative z-10 bg-white p-8 rounded-md shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-serif font-medium text-wine-800 leading-tight mb-6 text-center">
              Welcome Back
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="text-sm text-wine-600 hover:text-wine-800">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-wine-600 hover:bg-wine-700 text-white">
                Sign In
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-wine-600">
                  Don't have an account?{" "}
                  <Link to="#" className="text-wine-800 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;
