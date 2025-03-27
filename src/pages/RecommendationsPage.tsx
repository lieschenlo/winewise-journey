
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    region: "France",
    description: "The birthplace of fine wine culture, with regions like Bordeaux, Burgundy, and Champagne setting the global benchmark for quality and tradition.",
    wineStyles: ["Bordeaux Blends", "Burgundy Pinot Noir", "Champagne", "Loire Valley Whites"],
    image: "https://images.unsplash.com/photo-1566197147239-cb72fe6db8e0?q=80&w=2000"
  },
  {
    region: "Italy",
    description: "A diverse wine landscape with over 350 official grape varieties, from the elegant Barolos of Piedmont to the refreshing whites of Alto Adige.",
    wineStyles: ["Barolo", "Chianti Classico", "Brunello di Montalcino", "Prosecco"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974"
  },
  {
    region: "New World Regions",
    description: "Innovative winemaking from regions like California, Australia, and New Zealand has revolutionized the global wine scene with distinctive expressions.",
    wineStyles: ["Napa Cabernet", "Australian Shiraz", "New Zealand Sauvignon Blanc", "Argentine Malbec"],
    image: "https://images.unsplash.com/photo-1561662416-ce44446c54c7?q=80&w=1980"
  }
];

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
                alt="Wine bottles in cellar" 
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
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Expert Selection</h3>
                  <p className="text-wine-600">Each wine is personally tasted and vetted by our sommeliers before recommendation.</p>
                </div>
                
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Educational Focus</h3>
                  <p className="text-wine-600">Wines chosen to illustrate key concepts from WSET curriculum and wine theory.</p>
                </div>
                
                <div className="border-l-4 border-wine-600 pl-4">
                  <h3 className="font-serif text-xl text-wine-800 mb-2">Value at Every Level</h3>
                  <p className="text-wine-600">From affordable everyday bottles to fine wines, all offering excellent quality for price.</p>
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
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={rec.image} 
                    alt={rec.region} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-wine-800 mb-2 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-wine-600" /> {rec.region}
                  </h3>
                  <p className="text-wine-600 mb-4">{rec.description}</p>
                  <div className="mt-4">
                    <h4 className="text-wine-700 font-medium mb-3 flex items-center">
                      <Star className="mr-2 h-4 w-4 text-wine-600" /> Notable Wine Styles:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.wineStyles.map((style) => (
                        <Badge key={style} className="bg-wine-100 text-wine-800 hover:bg-wine-200">
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>
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

export default RecommendationsPage;
