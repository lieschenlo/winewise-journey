
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Check, Calendar, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Level4Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/courses">
            <Button variant="ghost" className="mb-6 text-wine-600 hover:text-wine-800 hover:bg-cream-50">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Courses
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070"
                alt="Advanced wine education" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-white hover:bg-primary/90">
                  Level 4
                </Badge>
                <Badge className="bg-white text-wine-800 hover:bg-gray-100 border border-cream-200">
                  Diploma
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 leading-tight mb-4">
                Mastering Wine & Business
              </h1>
              
              <p className="text-wine-600 mb-6">
                Our highest qualification offers expert-level knowledge and commercial understanding for professionals in the global wine industry.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-wine-600 mt-0.5 flex-shrink-0" />
                  <p className="text-wine-600"><span className="font-medium">Duration:</span> 120+ Hours over 18-24 months</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-wine-600 mt-0.5 flex-shrink-0" />
                  <p className="text-wine-600"><span className="font-medium">Prerequisites:</span> WSET Level 3 Award in Wines or equivalent</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-wine-600 mt-0.5 flex-shrink-0" />
                  <p className="text-wine-600"><span className="font-medium">Price:</span> $2,499 (payment plans available)</p>
                </div>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                  Request Syllabus
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-medium text-wine-800 mb-8 text-center">
            Diploma Curriculum
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-cream-200">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-wine-800 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-wine-600" />
                  Course Content
                </h3>
                
                <ul className="space-y-3">
                  {[
                    "Wine Production: Advanced viticulture and winemaking techniques",
                    "Wine Business: Global market analysis and industry trends",
                    "Light Wines: In-depth study of still wines from around the world",
                    "Sparkling Wines: Comprehensive examination of production methods and regions",
                    "Fortified Wines: Detailed analysis of styles, production, and markets",
                    "Independent Research Assignment: Industry-focused research project"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-wine-600">
                      <Check className="h-5 w-5 mt-0.5 text-wine-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-cream-200">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-wine-800 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-wine-600" />
                  Career Opportunities
                </h3>
                
                <p className="text-wine-600 mb-6">
                  The WSET Level 4 Diploma is highly respected within the global wine industry and opens doors to various advanced career paths:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Wine Buyer for prestigious retailers or distributors",
                    "Wine Director for luxury hotels and Michelin-starred restaurants",
                    "Senior Sommelier positions in fine dining establishments",
                    "Wine Marketing Director for wineries or importers",
                    "Wine Education Director at schools and academies",
                    "Eligible to apply for the Master of Wine program"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-wine-600">
                      <Check className="h-5 w-5 mt-0.5 text-wine-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-medium text-wine-800 mb-4">Ready to Take Your Wine Career to the Next Level?</h2>
            <p className="text-wine-600 mb-8">
              Our experienced educators, all holding the WSET Diploma or Master of Wine qualification, 
              will guide you through this challenging but rewarding program.
            </p>
            <Button size="lg" className="bg-wine-600 hover:bg-wine-700 text-white">
              Apply for the Diploma Program
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Level4Page;
