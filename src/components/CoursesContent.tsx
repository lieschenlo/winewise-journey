
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Book, GraduationCap, Award, Check, Info } from "lucide-react";

const levelCourses = [
  {
    id: 1,
    title: "Foundations of Wine",
    description: "An ideal starting point for the wine novice. This qualification provides a basic introduction to the main styles of wines available to front-line staff involved in the service or sale of wine.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070",
    level: "Beginner",
    duration: "8-10 Hours",
    price: "$299",
    includes: [
      "Wine tasting techniques",
      "Food and wine pairing basics",
      "Main grape varieties",
      "Service of wine",
      "Official WSET study materials"
    ]
  },
  {
    id: 2,
    title: "Exploring Wine Styles",
    description: "Looking to expand your wine knowledge? This qualification provides a deeper understanding of grape varieties and the main wine-producing regions of the world.",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070",
    level: "Intermediate",
    duration: "16-20 Hours",
    price: "$599",
    includes: [
      "Detailed wine tasting methodology",
      "Major grape varieties and regions",
      "Wine production factors",
      "Food and wine pairing principles",
      "Sparkling and fortified wines"
    ]
  },
  {
    id: 3,
    title: "Advanced Wine Knowledge",
    description: "For industry professionals seeking in-depth knowledge. This qualification provides detailed analysis of the principal wines and spirits of the world and their commercial importance in the market.",
    image: "https://images.unsplash.com/photo-1573062337052-54ad1468be40?q=80&w=2070",
    level: "Advanced",
    duration: "32-36 Hours",
    price: "$999",
    includes: [
      "Comprehensive global wine regions",
      "Advanced sensory evaluation",
      "Wine business and market insights",
      "Professional blind tasting techniques",
      "Production methods and their impact"
    ]
  },
  {
    id: 4,
    title: "Mastering Wine & Business",
    description: "Our highest qualification offers expert-level knowledge and commercial understanding for professionals in the global wine industry.",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070",
    level: "Diploma",
    duration: "120+ Hours",
    price: "$2499",
    includes: [
      "Global wine business strategies",
      "In-depth viticulture and vinification",
      "Market analysis and trends",
      "Fortified wine mastery",
      "Spirits and liqueurs expertise"
    ]
  },
];

const specialtyCourses = [
  {
    id: 1,
    title: "Wine & Food Pairing Masterclass",
    description: "Learn to create perfect harmonies between wine and cuisine with our expert-led workshop.",
    image: "https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?q=80&w=2070",
    level: "All Levels",
    duration: "6 Hours",
    price: "$199",
    includes: [
      "Pairing principles and techniques",
      "Challenging food pairings",
      "Regional pairing traditions",
      "Interactive tasting sessions",
      "Recipe and pairing guide"
    ]
  },
  {
    id: 2,
    title: "Old World Wine Regions",
    description: "Dive deep into Europe's classic wine regions, their history, and distinctive styles.",
    image: "https://images.unsplash.com/photo-1560148218-1a83060f7b32?q=80&w=2070",
    level: "Intermediate",
    duration: "12 Hours",
    price: "$349",
    includes: [
      "France, Italy, Spain deep dive",
      "Historical context and development",
      "Appellation systems",
      "Traditional production methods",
      "Guided regional tastings"
    ]
  },
  {
    id: 3,
    title: "New World Wine Exploration",
    description: "Explore the innovative wine regions of the Americas, Australia, New Zealand, and South Africa.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
    level: "Intermediate",
    duration: "12 Hours",
    price: "$349",
    includes: [
      "Key New World wine regions",
      "Varietal characteristics",
      "Modern winemaking techniques",
      "Climate and terroir analysis",
      "Signature wine tastings"
    ]
  },
];

const CoursesContent = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="levels" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-cream-50 border border-cream-100">
              <TabsTrigger value="levels" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6">
                <GraduationCap className="mr-2 h-4 w-4" />
                Qualification Levels
              </TabsTrigger>
              <TabsTrigger value="specialty" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6">
                <Book className="mr-2 h-4 w-4" />
                Specialty Courses
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="levels" className="mt-0">
            <motion.h2 
              className="text-3xl font-medium text-gray-800 mb-6 text-center flex justify-center items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="h-6 w-6 text-wine-600" />
              WSET Qualification Levels
            </motion.h2>
            
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Our structured wine education program aligns with the WSET curriculum, 
              providing clear progression from beginner to expert level qualifications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {levelCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-cream-100 shadow-sm h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white text-wine-800 hover:bg-gray-100">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-white hover:bg-primary/90">
                          Level {index + 1}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pt-5 pb-2">
                      <CardTitle className="text-xl text-wine-800">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="text-sm text-gray-500 mb-3 flex gap-2">
                        <span className="flex items-center gap-1">
                          <Info className="h-4 w-4" /> {course.duration}
                        </span>
                        <span className="font-medium text-wine-600">{course.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Includes:</p>
                        <ul className="space-y-1">
                          {course.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button className="w-full bg-wine-600 hover:bg-wine-700 text-white">
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="specialty" className="mt-0">
            <motion.h2 
              className="text-3xl font-medium text-gray-800 mb-6 text-center flex justify-center items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Book className="h-6 w-6 text-wine-600" />
              Specialty Wine Courses
            </motion.h2>
            
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Enhance your wine knowledge with our specialized courses focusing on specific regions, 
              styles, and food pairing techniques.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialtyCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-cream-100 shadow-sm h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white text-wine-800 hover:bg-gray-100">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pt-5 pb-2">
                      <CardTitle className="text-lg text-wine-800">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="text-sm text-gray-500 mb-3 flex gap-2">
                        <span className="flex items-center gap-1">
                          <Info className="h-4 w-4" /> {course.duration}
                        </span>
                        <span className="font-medium text-wine-600">{course.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Includes:</p>
                        <ul className="space-y-1">
                          {course.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button className="w-full bg-wine-600 hover:bg-wine-700 text-white">
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CoursesContent;
