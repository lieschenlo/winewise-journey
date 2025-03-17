
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | WineWise";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream-50 px-6 py-12">
      <div className="absolute top-0 left-0 w-full h-48 bg-wine-50"></div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-wine-100 blur-3xl opacity-70 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cream-100 blur-3xl opacity-60 z-0"></div>
      
      <div className="max-w-md text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-wine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h1 className="font-serif text-4xl font-bold text-wine-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <Button asChild className="bg-wine-600 hover:bg-wine-700 text-white">
            <Link to="/" className="flex items-center justify-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Homepage</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
