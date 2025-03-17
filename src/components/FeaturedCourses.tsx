
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const coursesData = [
  {
    id: 1,
    title: "Wine Basics for Beginners",
    description: "Get started with the fundamentals of wine tasting, types, and regions.",
    image: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?q=80&w=2080",
    lessons: 12,
    level: "Beginner",
    duration: "4 weeks",
    rating: 4.9,
    reviewCount: 348,
  },
  {
    id: 2,
    title: "Red Wine Varieties",
    description: "Explore the rich world of red wines, from Cabernet Sauvignon to Pinot Noir.",
    image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070",
    lessons: 16,
    level: "Intermediate",
    duration: "6 weeks",
    rating: 4.8,
    reviewCount: 215,
  },
  {
    id: 3,
    title: "Wine Regions of France",
    description: "Discover the terroir, grapes, and wines that made France famous.",
    image: "https://images.unsplash.com/photo-1566239135708-9d723310d77a?q=80&w=1974",
    lessons: 20,
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.9,
    reviewCount: 173,
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-24 px-6 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-wine-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cream-200 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-wine-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Wine Courses
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our most popular courses, designed to provide a comprehensive understanding of wine, from grape varieties to tasting techniques.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="overflow-hidden h-full card-hover border-none shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-wine-600 hover:bg-wine-700 text-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-wine-800">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <div className="text-sm text-wine-600 font-medium">
                      {course.rating} ({course.reviewCount} reviews)
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
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline" className="border-wine-300 text-wine-700 hover:bg-wine-50 py-6 px-8 text-lg">
              View All Courses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
