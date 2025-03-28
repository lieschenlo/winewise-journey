
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-wine-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our wine courses and services
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  What is the WSET certification?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  The Wine & Spirit Education Trust (WSET) is a globally recognized provider of wine education. Their qualifications range from Level 1 (beginner) through Level 4 (expert/diploma) and cover various aspects of wine knowledge, tasting, and evaluation. WineLecture offers courses that prepare students for all levels of WSET certification.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  Do I need previous wine knowledge to take your courses?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  No previous wine knowledge is required for our beginner courses. We offer classes suitable for all levels, from complete beginners to advanced enthusiasts. Our Level 1 courses assume no prior knowledge, while higher levels build on previous learning.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  How long does it take to complete a course?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  Course duration varies by level. Level 1 can be completed in a single day, Level 2 typically takes 2-3 days (or several weeks if part-time), Level 3 requires about 5 days of classes plus significant self-study, and Level 4 (Diploma) is a comprehensive program that takes 18-24 months to complete.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  What does a wine tasting class include?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  Our wine tasting classes include professional guidance through a selection of wines, tasting notes, food pairing suggestions, and educational content about wine regions, grape varieties, and production methods. All necessary materials, glassware, and selected wines are provided. Some classes also include small food pairings.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  Do you offer private group tastings?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  Yes, we offer private tastings for groups, corporate events, team-building activities, and special occasions. These can be customized to your preferences, knowledge level, and interests. Contact us for more information about private tasting options and pricing.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  For courses and tastings, cancellations made more than 14 days in advance receive a full refund. Cancellations 7-14 days before the event receive a 50% refund. Cancellations less than 7 days before the event are non-refundable. However, you may transfer your registration to another person or to a future class (subject to availability).
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  Where are your classes held?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  Our classes are held in our dedicated tasting room in the city center. The space is specially designed for wine education with professional tasting facilities. For some specialty courses, we may arrange visits to vineyards or wine production facilities. All location details are provided upon registration.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border border-cream-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-cream-50 font-medium text-wine-800">
                  Do you offer online courses?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-wine-600">
                  Yes, we offer a selection of online courses and virtual tastings. For virtual tastings, wine samples can be shipped to participants in advance (where legally permitted). Our online courses include video instruction, interactive elements, and virtual instructor support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
