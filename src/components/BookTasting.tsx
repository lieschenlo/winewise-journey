
import { motion } from "framer-motion";
import { Calendar, MapPin, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tastingSessions = [
  {
    title: "WSET Level 1 Tasting Workshop",
    description: "A perfect introduction to wine tasting techniques using the WSET Systematic Approach to Tasting.",
    duration: "2 hours",
    price: "$75",
    type: "In Person"
  },
  {
    title: "Regional Exploration: Bordeaux",
    description: "Dive deep into the classic wines of Bordeaux. Compare Left Bank and Right Bank styles.",
    duration: "3 hours",
    price: "$95",
    type: "In Person"
  },
  {
    title: "Blind Tasting Challenge",
    description: "Put your tasting skills to the test in this interactive session. Perfect for WSET Level 2 and 3 preparation.",
    duration: "2.5 hours",
    price: "$85",
    type: "In Person"
  }
];

const BookTasting = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="bg-cream-50 border border-cream-100 rounded-md p-8">
              <h2 className="text-3xl font-serif text-wine-800 mb-4">Book Your Tasting</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our expert-led tasting sessions to develop your palate and prepare for WSET qualifications.
              </p>
              
              <div className="space-y-4">
                {tastingSessions.map((session, index) => (
                  <Card key={index} className="border-cream-100 rounded-md">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-serif text-wine-700">{session.title}</h3>
                      <p className="text-gray-600 mb-3">{session.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-wine-600" /> {session.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Wine className="h-4 w-4 text-wine-600" /> {session.type}
                        </span>
                        <span className="font-medium">{session.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button className="w-full mt-6 bg-wine-600 hover:bg-wine-700 text-white">
                Reserve Your Spot
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[500px] rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1567072363923-5333ab905882?q=80&w=2070" 
                alt="Wine tasting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <p className="text-lg font-serif mb-1">Our Tasting Room</p>
                <p className="text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-1" /> 123 Wine Avenue, Grapevine, CA 94000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookTasting;
