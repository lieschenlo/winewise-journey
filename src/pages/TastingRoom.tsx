
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TastingRoomHero from "@/components/TastingRoomHero";
import TastingNotes from "@/components/TastingNotes";

const TastingRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <TastingRoomHero />
      <TastingNotes />
      <Footer />
    </div>
  );
};

export default TastingRoom;
