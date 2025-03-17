
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseCategories from "@/components/CourseCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import ParallaxSection from "@/components/ParallaxSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <CourseCategories />
      <FeaturedCourses />
      <ParallaxSection />
      <Testimonials />
      <AboutSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
