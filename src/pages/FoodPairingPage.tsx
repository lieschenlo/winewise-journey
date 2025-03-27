
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FoodPairingPage = () => {
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
                src="https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?q=80&w=2070"
                alt="Food and wine pairing" 
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
                The Art of Food & Wine Pairing
              </h1>
              
              <p className="text-wine-600 mb-6">
                Discover how to create perfect harmony between cuisine and wine, enhancing both the food and wine experience through expert pairings.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Classic Pairings</h3>
                  <p className="text-wine-600">Learn time-tested combinations that have delighted palates for centuries, from Cabernet with steak to Sauternes with foie gras.</p>
                </div>
                
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Regional Traditions</h3>
                  <p className="text-wine-600">Explore how local cuisines have evolved alongside local wines to create perfect regional pairings.</p>
                </div>
                
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Pairing Principles</h3>
                  <p className="text-wine-600">Master the underlying rules of complementary and contrasting flavors to confidently create your own exceptional pairings.</p>
                </div>
              </div>
              
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Book a Pairing Workshop
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-medium text-wine-800 mb-8 text-center">
            Our Pairing Workshops
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cheese & Wine",
                description: "Explore the classic combinations of artisanal cheeses with perfectly matched wines.",
                image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=2074"
              },
              {
                title: "Chocolate & Wine",
                description: "Discover the surprising harmony between fine chocolate and selected wine styles.",
                image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2072"
              },
              {
                title: "Seasonal Cuisine",
                description: "Learn to pair wines with seasonal ingredients for memorable dining experiences.",
                image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070"
              }
            ].map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">{workshop.title}</h3>
                  <p className="text-wine-600 mb-4">{workshop.description}</p>
                  <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50 w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FoodPairingPage;
