
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Flashcards from "@/components/Flashcards";
import ExcelUploader from "@/components/ExcelUploader";
import FrenchWineMap from "@/components/FrenchWineMap";
import { toast } from "@/components/ui/use-toast";

const FoundationsOfWine = () => {
  const [flashcardsData, setFlashcardsData] = useState<{ question: string; answer: string }[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUploadSuccess = (data: { question: string; answer: string }[]) => {
    setFlashcardsData(data);
    toast({
      title: "Upload successful",
      description: `${data.length} flashcards have been loaded`,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="min-h-[60vh] pt-28 pb-12 px-6 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070" 
            alt="Wine education setting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="h-1 w-12 bg-cream-100 mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
              Foundations of Wine
            </h1>
            
            <p className="text-lg text-cream-50 mb-8 max-w-xl">
              Master the basics of wine knowledge with our interactive learning tools and flashcards.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-cream-50 border border-cream-100">
                <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6">
                  Course Overview
                </TabsTrigger>
                <TabsTrigger value="flashcards" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6">
                  Flashcards
                </TabsTrigger>
                <TabsTrigger value="wine-regions" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6">
                  Wine Regions
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-medium text-wine-800 mb-6">About This Course</h2>
                <p className="text-gray-600 mb-6">
                  An ideal starting point for the wine novice. This qualification provides a basic introduction to the main styles of wines available to front-line staff involved in the service or sale of wine.
                </p>
                
                <div className="bg-cream-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-medium text-wine-800 mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-wine-600 font-medium">•</span>
                      <span>Wine tasting techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine-600 font-medium">•</span>
                      <span>Food and wine pairing basics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine-600 font-medium">•</span>
                      <span>Main grape varieties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine-600 font-medium">•</span>
                      <span>Service of wine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine-600 font-medium">•</span>
                      <span>Official WSET study materials</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-medium text-wine-800 mb-4">Study with Flashcards</h3>
                <p className="text-gray-600 mb-6">
                  Our interactive flashcards help you master wine knowledge through effective spaced repetition. Upload your own study material or use our curated sets.
                </p>
                
                <h3 className="text-xl font-medium text-wine-800 mb-4">Interactive Wine Regions</h3>
                <p className="text-gray-600 mb-6">
                  Test your knowledge of French wine appellations with our drag-and-drop exercise. Learn the major wine producing regions of France while having fun.
                </p>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="flashcards" className="mt-0">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-medium text-wine-800 mb-6 text-center">Interactive Flashcards</h2>
                  <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                    Test your wine knowledge with these interactive flashcards. Upload your own set via Excel file or use our sample cards to get started.
                  </p>
                  
                  <div className="bg-cream-50 p-6 rounded-lg mb-10">
                    <h3 className="text-xl font-medium text-wine-800 mb-4">Upload Your Flashcards</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload your Excel file with columns for "question" and "answer". 
                      Your file will not be stored on our servers after processing.
                    </p>
                    <ExcelUploader onUploadSuccess={handleUploadSuccess} />
                  </div>
                </motion.div>
                
                <Flashcards initialCards={flashcardsData} />
              </div>
            </TabsContent>
            
            <TabsContent value="wine-regions" className="mt-0">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-medium text-wine-800 mb-6 text-center">French Wine Appellations</h2>
                  <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                    Learn the major wine regions of France with this interactive map. Drag each wine region to its correct location.
                  </p>
                </motion.div>
                
                <FrenchWineMap />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FoundationsOfWine;
