
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Wine, GrapeIcon, Search, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const redWines = [
  {
    id: 1,
    title: "Barolo DOCG",
    region: "Piedmont, Italy",
    vintage: "2018",
    grape: "Nebbiolo",
    description: "Elegant and powerful with notes of cherries, roses, and tar. Firm tannins balance the bright acidity, creating a complex and age-worthy profile.",
    image: "https://images.unsplash.com/photo-1566552881560-02559a8a11c9?q=80&w=1974",
    date: "May 15, 2023"
  },
  {
    id: 2,
    title: "Rioja Reserva",
    region: "Rioja, Spain",
    vintage: "2016",
    grape: "Tempranillo",
    description: "Traditional style with red fruit, vanilla, and coconut notes from American oak aging. Medium body with integrated tannins and a long, spicy finish.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
    date: "April 3, 2023"
  },
  {
    id: 3,
    title: "Napa Valley Cabernet Sauvignon",
    region: "California, USA",
    vintage: "2019",
    grape: "Cabernet Sauvignon",
    description: "Bold and concentrated with blackcurrant, cedar, and chocolate notes. Full-bodied with velvety tannins and a long, opulent finish.",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=1974",
    date: "March 21, 2023" 
  },
];

const whiteWines = [
  {
    id: 4,
    title: "Chablis Premier Cru",
    region: "Burgundy, France",
    vintage: "2020",
    grape: "Chardonnay",
    description: "Pure and mineral-driven with green apple, lemon, and distinctive chalky character. Crisp acidity and a clean, focused finish.",
    image: "https://images.unsplash.com/photo-1590159983013-d637b819f8d4?q=80&w=1972",
    date: "June 7, 2023"
  },
  {
    id: 5,
    title: "Marlborough Sauvignon Blanc",
    region: "New Zealand",
    vintage: "2022",
    grape: "Sauvignon Blanc",
    description: "Intensely aromatic with passionfruit, gooseberry, and grassy notes. Vibrant acidity and a refreshing, zesty character.",
    image: "https://images.unsplash.com/photo-1566840767020-29283f8d2e2e?q=80&w=1974",
    date: "May 25, 2023"
  },
  {
    id: 6,
    title: "Mosel Riesling Kabinett",
    region: "Mosel, Germany",
    vintage: "2021",
    grape: "Riesling",
    description: "Delicate and off-dry with green apple, lime, and slate minerality. Perfect balance between sweetness and acidity.",
    image: "https://images.unsplash.com/photo-1473690678553-0075e56dbac7?q=80&w=1974",
    date: "April 12, 2023"
  },
];

const sparklingWines = [
  {
    id: 7,
    title: "Vintage Champagne",
    region: "Champagne, France",
    vintage: "2015",
    grape: "Chardonnay, Pinot Noir, Pinot Meunier",
    description: "Complex and refined with brioche, apple, and citrus notes. Fine mousse with persistent bubbles and a long, toasty finish.",
    image: "https://images.unsplash.com/photo-1631224226481-56c082cf8aad?q=80&w=1964",
    date: "June 30, 2023"
  },
  {
    id: 8,
    title: "Franciacorta Satèn",
    region: "Lombardy, Italy",
    vintage: "NV",
    grape: "Chardonnay",
    description: "Elegant with softer pressure, showing ripe apple, white flower, and brioche notes. Silky texture with refined bubbles.",
    image: "https://images.unsplash.com/photo-1527596428173-fd93c8c88d95?q=80&w=1974",
    date: "June 15, 2023"
  },
  {
    id: 9,
    title: "Traditional Method Rosé",
    region: "Tasmania, Australia",
    vintage: "2018",
    grape: "Pinot Noir",
    description: "Delicate salmon color with strawberry, cherry, and fresh bread aromas. Fine bubbles with crisp acidity and a clean finish.",
    image: "https://images.unsplash.com/photo-1521671413015-ce5b7696d6d2?q=80&w=1974",
    date: "May 5, 2023"
  },
];

const TastingNotes = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="red" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-cream-50 border border-cream-100">
              <TabsTrigger value="red" className="data-[state=active]:bg-wine-600 data-[state=active]:text-white px-6">
                <Wine className="mr-2 h-4 w-4" />
                Red Wines
              </TabsTrigger>
              <TabsTrigger value="white" className="data-[state=active]:bg-wine-600 data-[state=active]:text-white px-6">
                <Wine className="mr-2 h-4 w-4" />
                White Wines
              </TabsTrigger>
              <TabsTrigger value="sparkling" className="data-[state=active]:bg-wine-600 data-[state=active]:text-white px-6">
                <Wine className="mr-2 h-4 w-4" />
                Sparkling
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-3xl font-medium text-wine-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Latest Tasting Notes
            </motion.h2>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                <BookOpen className="h-4 w-4 mr-2" />
                Full Archive
              </Button>
            </div>
          </div>
          
          <TabsContent value="red" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {redWines.map((wine, index) => (
                <WineCard key={wine.id} wine={wine} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="white" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whiteWines.map((wine, index) => (
                <WineCard key={wine.id} wine={wine} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sparkling" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sparklingWines.map((wine, index) => (
                <WineCard key={wine.id} wine={wine} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif text-wine-800 mb-6">Connect Your Learning</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Our tasting notes directly support your WSET qualification journey by providing real-world examples 
            of the wines you'll study and taste in your courses.
          </p>
          <Link to="/courses">
            <Button className="bg-wine-600 hover:bg-wine-700 text-white">
              Explore Our Wine Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const WineCard = ({ wine, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-cream-100 shadow-sm h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={wine.image} 
            alt={wine.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-white text-wine-800 hover:bg-gray-100">
              {wine.region}
            </Badge>
          </div>
        </div>
        <CardHeader className="pt-5 pb-2">
          <CardTitle className="text-xl text-wine-800">{wine.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="text-sm text-gray-500 mb-3 flex flex-wrap gap-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {wine.date}
            </span>
            <span className="flex items-center gap-1">
              <Wine className="h-4 w-4" /> {wine.vintage}
            </span>
            <span className="flex items-center gap-1 text-wine-600 font-medium">
              {wine.grape}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{wine.description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button variant="outline" className="w-full border-wine-300 text-wine-700 hover:bg-wine-50">
            Read Full Note
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TastingNotes;
