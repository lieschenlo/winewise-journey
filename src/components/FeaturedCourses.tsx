
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const coursesData = [
  {
    id: 1,
    title: "Wine Basics",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070",
    level: "Beginner",
    duration: "4 weeks",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Red Wine Varieties",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070",
    level: "Intermediate",
    duration: "6 weeks",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Wine Regions",
    image: "https://images.unsplash.com/photo-1573062337052-54ad1468be40?q=80&w=2070",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.9,
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl font-bold text-wine-800 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Lectures
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-wine-600 hover:bg-wine-700 text-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pt-4 pb-0">
                  <CardTitle className="font-serif text-xl text-wine-800">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-wine-600 hover:bg-wine-700 text-white">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
