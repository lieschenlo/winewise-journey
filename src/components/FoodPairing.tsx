
import { motion } from "framer-motion";
import { Wine, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pairings = [
  {
    wine: "Bold Reds",
    foods: ["Grilled Ribeye Steak", "Lamb Chops", "Aged Hard Cheeses"],
    description: "The tannins in bold red wines like Cabernet Sauvignon and Syrah cut through the richness of red meats, while their robust flavors complement the umami characteristics.",
    image: "https://images.unsplash.com/photo-1545528102-ebaae056ea65?q=80&w=1974"
  },
  {
    wine: "Crisp Whites",
    foods: ["Grilled Fish", "Seafood Pasta", "Fresh Goat Cheese"],
    description: "The high acidity and citrus notes in wines like Sauvignon Blanc and Pinot Grigio complement the delicate flavors of seafood and cut through creamy textures.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070"
  },
  {
    wine: "Sparkling",
    foods: ["Oysters", "Fried Appetizers", "Sushi"],
    description: "The effervescence and high acidity of Champagne and other sparkling wines cleanse the palate, making them versatile partners for a wide range of foods.",
    image: "https://images.unsplash.com/photo-1594806110522-b4d08cb1a7f7?q=80&w=1974"
  },
  {
    wine: "Dessert Wines",
    foods: ["Blue Cheese", "Crème Brûlée", "Fruit Tarts"],
    description: "The sweetness of dessert wines like Sauternes and Port creates a perfect balance with salty blue cheese or complements the sweetness in desserts.",
    image: "https://images.unsplash.com/photo-1614089552227-5b3aa1c3e21d?q=80&w=1974"
  }
];

const FoodPairing = () => {
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
          <h2 className="text-3xl md:text-4xl font-serif text-wine-800 mb-4">Food Pairing</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enhance your wine experience with our expert food pairing suggestions. Understanding 
            complementary flavors is a key aspect of WSET education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pairings.map((pairing, index) => (
            <motion.div
              key={pairing.wine}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}
            >
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-lg">
                <img 
                  src={pairing.image} 
                  alt={pairing.wine} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Card className="border-cream-100 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-wine-700 mb-3 flex items-center">
                      <Wine className="h-5 w-5 mr-2 text-wine-600" />
                      {pairing.wine}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-wine-500" /> 
                        Perfect With:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm ml-2">
                        {pairing.foods.map((food) => (
                          <li key={food}>{food}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-gray-600 text-sm">{pairing.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodPairing;
