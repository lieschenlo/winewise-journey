
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import TastingRoom from "./pages/TastingRoom";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FoodPairingPage from "./pages/FoodPairingPage";
import BookTastingPage from "./pages/BookTastingPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import Level4Page from "./pages/Level4Page";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tasting-room" element={<TastingRoom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food-pairing" element={<FoodPairingPage />} />
          <Route path="/book-tasting" element={<BookTastingPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/level4" element={<Level4Page />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
