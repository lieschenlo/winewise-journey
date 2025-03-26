
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
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

const CuratedRecommendations = () => {
  return (
    <section className="py-16 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-wine-800 mb-4">Curated Recommendations Around the World</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our expert selections from key wine regions globally. These recommendations align with 
            WSET curriculum and will expand your understanding of regional wine characteristics.
          </p>
        </motion.div>

        <div className="space-y-16">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={rec.image} 
                    alt={rec.region} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-serif mb-2 flex items-center">
                        <MapPin className="mr-2 h-5 w-5" /> {rec.region}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <div className="bg-white p-6 rounded-lg border border-cream-100 shadow-sm">
                  <p className="text-gray-700 mb-6">{rec.description}</p>
                  <div>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedRecommendations;
