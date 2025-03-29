
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, ArrowRight, RefreshCw, 
  BookOpen, HelpCircle, CheckCircle, XCircle 
} from "lucide-react";

interface FlashcardProps {
  initialCards: { question: string; answer: string }[];
}

// Example default flashcards if none are uploaded
const defaultCards = [
  {
    question: "What grape variety is used to make Champagne?",
    answer: "Primarily Chardonnay, Pinot Noir, and Pinot Meunier"
  },
  {
    question: "What is the most planted grape in Bordeaux?",
    answer: "Merlot"
  },
  {
    question: "What does 'tannin' refer to in wine?",
    answer: "Compounds that create a dry, astringent sensation in the mouth, mainly found in red wines"
  },
  {
    question: "Which wine region is known for Sangiovese?",
    answer: "Tuscany, Italy"
  },
  {
    question: "What is the ideal serving temperature for full-bodied red wines?",
    answer: "Between 16-18°C (60-65°F)"
  }
];

const Flashcards = ({ initialCards }: FlashcardProps) => {
  const [cards, setCards] = useState<{ question: string; answer: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());
  const [cardsReview, setCardsReview] = useState<{ index: number; known: boolean }[]>([]);

  useEffect(() => {
    // Use uploaded cards or default cards if none provided
    if (initialCards && initialCards.length > 0) {
      setCards(initialCards);
    } else {
      setCards(defaultCards);
    }
    // Reset current state whenever cards change
    setCurrentIndex(0);
    setFlipped(false);
    setKnownCards(new Set());
    setCardsReview([]);
  }, [initialCards]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setFlipped(false);
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleKnown = () => {
    const newKnown = new Set(knownCards);
    newKnown.add(currentIndex);
    setKnownCards(newKnown);
    
    // Add to review history
    setCardsReview(prev => [...prev, { index: currentIndex, known: true }]);
    
    // Move to next card
    if (currentIndex < cards.length - 1) {
      handleNext();
    }
  };

  const handleUnknown = () => {
    const newKnown = new Set(knownCards);
    newKnown.delete(currentIndex);
    setKnownCards(newKnown);
    
    // Add to review history
    setCardsReview(prev => [...prev, { index: currentIndex, known: false }]);
    
    // Move to next card
    if (currentIndex < cards.length - 1) {
      handleNext();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setKnownCards(new Set());
    setCardsReview([]);
  };

  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  if (cards.length === 0) {
    return (
      <div className="text-center p-10 bg-cream-50 rounded-lg">
        <HelpCircle className="mx-auto h-12 w-12 text-wine-300 mb-4" />
        <h3 className="text-xl font-medium text-wine-800 mb-2">No Flashcards Available</h3>
        <p className="text-gray-600">
          Please upload an Excel file with your flashcards or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative h-1 w-full bg-gray-200 rounded-full mb-8">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-wine-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Card {currentIndex + 1} of {cards.length}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">
            Known: {knownCards.size}/{cards.length}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            className="text-wine-600 border-wine-200"
          >
            <RefreshCw className="h-4 w-4 mr-1" /> Reset
          </Button>
        </div>
      </div>

      <div className="perspective-1000 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -10 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 10 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              <div 
                className={`relative w-full transition-all duration-500 cursor-pointer min-h-[300px] sm:min-h-[400px]`}
                style={{ 
                  transformStyle: "preserve-3d", 
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" 
                }}
                onClick={handleFlip}
              >
                {/* Front of the card */}
                <Card className={`absolute inset-0 backface-hidden border-2 ${knownCards.has(currentIndex) ? 'border-green-300' : 'border-wine-200'}`}>
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <BookOpen className="h-10 w-10 text-wine-500 mb-6" />
                    <h3 className="text-xl md:text-2xl font-medium text-center text-wine-800 mb-4">
                      {cards[currentIndex].question}
                    </h3>
                    <p className="text-gray-500 text-center">
                      Click to see answer
                    </p>
                  </CardContent>
                </Card>
                
                {/* Back of the card */}
                <Card 
                  className="absolute inset-0 backface-hidden border-2 border-wine-200"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <h3 className="text-xl md:text-2xl font-medium text-center text-wine-800 mb-8">
                      {cards[currentIndex].answer}
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button 
                        onClick={(e) => { e.stopPropagation(); handleUnknown(); }}
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        <XCircle className="h-5 w-5 mr-2" /> Still Learning
                      </Button>
                      <Button 
                        onClick={(e) => { e.stopPropagation(); handleKnown(); }}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" /> Got It
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4">
        <Button 
          onClick={handlePrevious} 
          disabled={currentIndex === 0}
          variant="outline"
          className="text-wine-600 border-wine-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" /> Previous
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={currentIndex === cards.length - 1}
          variant="outline"
          className="text-wine-600 border-wine-200"
        >
          Next <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>

      {cardsReview.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-medium text-wine-800 mb-4">Your Session Progress</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardsReview.map((review, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-md ${review.known ? 'bg-green-50' : 'bg-red-50'}`}
              >
                <div className="flex items-start gap-2">
                  {review.known ? 
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /> : 
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className="text-sm font-medium text-gray-800 line-clamp-1">
                      {cards[review.index].question}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {review.known ? 'You got this right' : 'Keep practicing this one'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Flashcards;
