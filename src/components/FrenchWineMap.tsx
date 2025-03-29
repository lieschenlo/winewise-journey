
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw, Check } from "lucide-react";

interface WineRegion {
  id: string;
  name: string;
  color: string;
  position: { top: string; left: string };
  description: string;
}

interface DraggableRegion extends WineRegion {
  isCorrect: boolean;
  isPlaced: boolean;
}

const wineRegions: WineRegion[] = [
  {
    id: "bordeaux",
    name: "Bordeaux",
    color: "#7C0A02",
    position: { top: "68%", left: "28%" },
    description: "Famous for Cabernet Sauvignon and Merlot blends"
  },
  {
    id: "burgundy",
    name: "Burgundy",
    color: "#B76E79",
    position: { top: "45%", left: "53%" },
    description: "Renowned for Pinot Noir and Chardonnay"
  },
  {
    id: "champagne",
    name: "Champagne",
    color: "#F1E788",
    position: { top: "30%", left: "55%" },
    description: "Home of the world-famous sparkling wine"
  },
  {
    id: "loire",
    name: "Loire Valley",
    color: "#AFDAFF",
    position: { top: "48%", left: "35%" },
    description: "Known for Sauvignon Blanc and Chenin Blanc"
  },
  {
    id: "rhone",
    name: "Rhône Valley",
    color: "#8A2BE2",
    position: { top: "66%", left: "55%" },
    description: "Famous for Syrah and GSM blends"
  },
  {
    id: "alsace",
    name: "Alsace",
    color: "#FFA500",
    position: { top: "28%", left: "70%" },
    description: "Known for aromatic white wines"
  }
];

const FrenchWineMap = () => {
  const [draggableRegions, setDraggableRegions] = useState<DraggableRegion[]>([]);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Initialize draggable regions
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    // Create shuffled regions for dragging
    const shuffled = [...wineRegions]
      .sort(() => Math.random() - 0.5)
      .map(region => ({
        ...region,
        isCorrect: false,
        isPlaced: false
      }));
    
    setDraggableRegions(shuffled);
    setStarted(false);
    setCompleted(false);
    setScore(0);
  };

  const handleDragEnd = (regionId: string, event: any) => {
    if (!started) {
      setStarted(true);
    }

    const targetElement = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    
    const targetRegionId = targetElement?.getAttribute("data-region-id");
    
    if (targetRegionId) {
      const updatedRegions = draggableRegions.map(region => {
        if (region.id === regionId) {
          const isCorrect = region.id === targetRegionId;
          
          // Show toast for feedback
          if (isCorrect) {
            toast({
              title: "Correct!",
              description: `${region.name}: ${region.description}`,
              variant: "default",
            });
            setScore(prev => prev + 1);
          } else {
            toast({
              title: "Not quite right",
              description: "Try again!",
              variant: "destructive",
            });
          }
          
          return {
            ...region,
            isCorrect,
            isPlaced: true
          };
        }
        return region;
      });
      
      setDraggableRegions(updatedRegions);
      
      // Check if all regions are placed correctly
      const allCorrect = updatedRegions.every(region => region.isCorrect);
      if (allCorrect) {
        setCompleted(true);
        toast({
          title: "Congratulations!",
          description: "You've correctly placed all French wine regions!",
          variant: "default",
        });
      }
    }
  };

  return (
    <div className="relative w-full bg-cream-50 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-serif font-medium text-wine-800 mb-4">
          French Wine Regions
        </h3>
        <p className="text-gray-600 mb-6">
          Drag each wine region name to its correct location on the map of France.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map container */}
          <div className="relative flex-1 bg-white rounded-lg p-6 shadow-sm min-h-[400px] md:min-h-[500px]">
            <div className="relative h-full w-full">
              {/* France map outline */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ position: "absolute", zIndex: 1 }}
              >
                <path
                  d="M120,50 L180,30 L240,50 L290,30 L330,80 L320,150 L350,220 L320,280 L240,340 L190,320 L140,340 L90,300 L60,240 L70,180 L90,120 Z"
                  fill="#f2f2f2"
                  stroke="#888"
                  strokeWidth="2"
                />
              </svg>

              {/* Target areas for each region */}
              {wineRegions.map(region => (
                <div
                  key={`target-${region.id}`}
                  data-region-id={region.id}
                  className="absolute rounded-full flex items-center justify-center border-2 border-dashed"
                  style={{
                    top: region.position.top,
                    left: region.position.left,
                    width: "40px",
                    height: "40px",
                    borderColor: region.color,
                    backgroundColor: `${region.color}20`,
                    zIndex: 2
                  }}
                >
                  <MapPin 
                    size={20} 
                    color={region.color} 
                    className={`transition-opacity ${completed ? 'opacity-0' : 'opacity-100'}`} 
                  />
                  {completed && (
                    <div className="absolute inset-0 flex items-center justify-center font-medium text-xs">
                      {region.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Draggable regions */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-700">Wine Regions</h4>
              <div className="text-sm font-medium">
                Score: {score}/{wineRegions.length}
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {draggableRegions.map(region => (
                <motion.div
                  key={region.id}
                  drag={!region.isPlaced}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => handleDragEnd(region.id, info)}
                  className={`p-3 rounded-md cursor-grab shadow-sm transition-all ${
                    region.isPlaced 
                      ? (region.isCorrect 
                          ? "opacity-50 pointer-events-none bg-green-100 border border-green-300" 
                          : "opacity-50 pointer-events-none bg-red-100 border border-red-300") 
                      : "hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: region.isPlaced ? 'inherit' : `${region.color}30`,
                    borderLeft: `4px solid ${region.color}`
                  }}
                >
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">{region.name}</span>
                    {region.isPlaced && region.isCorrect && (
                      <Check size={16} className="ml-2 text-green-500" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button 
              onClick={resetGame}
              className="w-full gap-2"
              variant="outline"
            >
              <RefreshCw size={16} />
              Reset Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchWineMap;
