
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Foundations of Wine",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070",
    level: "Beginner",
    duration: "Level 1",
  },
  {
    id: 2,
    title: "Exploring Wine Styles",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070",
    level: "Intermediate",
    duration: "Level 2",
  },
  {
    id: 3,
    title: "Advanced Wine Knowledge",
    image: "https://images.unsplash.com/photo-1573062337052-54ad1468be40?q=80&w=2070",
    level: "Advanced",
    duration: "Level 3",
  },
  {
    id: 4,
    title: "Mastering Wine & Business",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2070",
    level: "Diploma",
    duration: "Level 4",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium text-gray-800 mb-4 md:mb-0">Learn.</h2>
          <Link to="/courses">
            <Button 
              variant="outline" 
              className="border-wine-300 text-wine-700 hover:text-wine-900 hover:bg-wine-50"
            >
              View All Courses
            </Button>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white text-gray-800 hover:bg-gray-100">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pt-4 pb-0">
                  <CardTitle className="text-lg text-gray-800">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/courses" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      View Course
                    </Button>
                  </Link>
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
