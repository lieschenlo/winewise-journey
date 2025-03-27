
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecommendationsPage = () => {
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
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070"
                alt="Wine cellar with bottles" 
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
                Curated Wine Recommendations
              </h1>
              
              <p className="text-wine-600 mb-6">
                Discover exceptional wines selected by our experts to enhance your tasting journey and build a thoughtful collection.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">Expert Selection</h3>
                    <p className="text-wine-600">Each wine is personally tasted and vetted by our sommeliers before recommendation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">Educational Focus</h3>
                    <p className="text-wine-600">Wines chosen to illustrate key concepts from WSET curriculum and wine theory.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-wine-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">Value at Every Level</h3>
                    <p className="text-wine-600">From affordable everyday bottles to fine wines, all offering excellent quality for price.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Get Personalized Recommendations
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-medium text-wine-800 mb-8 text-center">
            This Month's Selections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Château Margaux 2015",
                region: "Bordeaux, France",
                price: "$120",
                description: "Elegant, refined and complex with notes of dark berries, violets and cedar.",
                category: "Red Wine"
              },
              {
                name: "Kistler Chardonnay 2018",
                region: "Sonoma, California",
                price: "$85",
                description: "Rich and textured with balanced oak, ripe pear and citrus notes.",
                category: "White Wine"
              },
              {
                name: "Dom Pérignon 2012",
                region: "Champagne, France",
                price: "$210",
                description: "Precise and vibrant with remarkable depth and persistence on the palate.",
                category: "Sparkling"
              }
            ].map((wine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-cream-200 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge className="self-start mb-2 bg-wine-600 hover:bg-wine-700">
                      {wine.category}
                    </Badge>
                    <h3 className="font-serif text-xl text-wine-800 mb-1">{wine.name}</h3>
                    <p className="text-wine-600 text-sm mb-3">{wine.region}</p>
                    <p className="text-wine-600 mb-4 flex-grow">{wine.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-wine-800">{wine.price}</span>
                      <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                        Details
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

export default RecommendationsPage;
