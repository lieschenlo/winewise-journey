
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Clock, Wine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BookTastingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/tasting-room">
            <Button variant="ghost" className="mb-6 text-wine-600 hover:text-wine-800 hover:bg-cream-50">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Tasting Room
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
                src="https://images.unsplash.com/photo-1560391251-fcd48a7daa3d?q=80&w=2070"
                alt="Wine tasting experience" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 leading-tight mb-4">
                Reserve Your Tasting Experience
              </h1>
              
              <p className="text-wine-600 mb-6">
                Join us for an educational wine tasting that will enhance your sensory skills and deepen your appreciation for fine wines.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">Flexible Scheduling</h3>
                    <p className="text-wine-600">Choose from weekday evenings or weekend sessions that fit your calendar.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">Small Groups</h3>
                    <p className="text-wine-600">Intimate tastings limited to 8-12 participants for personalized attention.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">90-Minute Experience</h3>
                    <p className="text-wine-600">Guided tasting with educational commentary and tasting notes to take home.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Book Your Tasting
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-medium text-wine-800 mb-8 text-center">
            Featured Tasting Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Old World Classics",
                description: "Journey through Europe's legendary wine regions and their iconic styles.",
                price: "$65",
                icon: Wine
              },
              {
                title: "New World Discoveries",
                description: "Explore innovative wines from emerging regions around the globe.",
                price: "$55",
                icon: Wine
              },
              {
                title: "Blind Tasting Workshop",
                description: "Develop your sensory skills with this challenging but rewarding experience.",
                price: "$75",
                icon: Wine
              }
            ].map((tasting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-cream-200 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl text-wine-800">{tasting.title}</h3>
                      <tasting.icon className="h-8 w-8 text-wine-600" />
                    </div>
                    <p className="text-wine-600 mb-4 flex-grow">{tasting.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-wine-800">{tasting.price} per person</span>
                      <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                        Reserve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookTastingPage;
