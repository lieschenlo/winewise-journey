
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import CoursesContent from "@/components/CoursesContent";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <CoursesHero />
      <CoursesContent />
      <Footer />
    </div>
  );
};

export default Courses;
