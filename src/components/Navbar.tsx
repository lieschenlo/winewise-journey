
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wine, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Wine className="h-7 w-7 text-wine-600" />
          <span className="font-sans font-semibold text-xl md:text-2xl text-wine-800">WineLecture</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLinks currentPath={location.pathname} />
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline" className="border-wine-300 text-wine-700 hover:text-wine-900 hover:bg-wine-50">
                Log In
              </Button>
            </Link>
            <Link to="/courses">
              <Button className="bg-wine-600 hover:bg-wine-700 text-white">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
        
        <button 
          className="md:hidden text-wine-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 transform ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-6 flex flex-col gap-4">
          <MobileNavLinks currentPath={location.pathname} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="border-wine-300 text-wine-700 w-full">
                Log In
              </Button>
            </Link>
            <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-wine-600 hover:bg-wine-700 text-white w-full">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ currentPath }) => {
  return (
    <div className="flex items-center gap-8">
      <Link 
        to="/" 
        className={`text-wine-700 hover:text-wine-900 underline-animation ${currentPath === '/' ? 'font-medium' : ''}`}
      >
        Home
      </Link>
      <Link 
        to="/courses" 
        className={`text-wine-700 hover:text-wine-900 underline-animation ${currentPath === '/courses' ? 'font-medium' : ''}`}
      >
        Courses
      </Link>
      <Link 
        to="/tasting-room" 
        className={`text-wine-700 hover:text-wine-900 underline-animation ${currentPath === '/tasting-room' ? 'font-medium' : ''}`}
      >
        Tasting Room
      </Link>
      <Link 
        to="/about-us" 
        className={`text-wine-700 hover:text-wine-900 underline-animation ${currentPath === '/about-us' ? 'font-medium' : ''}`}
      >
        About Us
      </Link>
      <Link 
        to="/contact" 
        className="text-wine-700 hover:text-wine-900 underline-animation"
      >
        Contact
      </Link>
    </div>
  );
};

const MobileNavLinks = ({ currentPath, setIsMobileMenuOpen }: { currentPath: string, setIsMobileMenuOpen: (value: boolean) => void }) => {
  const handleClick = () => setIsMobileMenuOpen(false);
  
  return (
    <div className="flex flex-col gap-4">
      <Link 
        to="/" 
        className={`text-wine-700 hover:text-wine-900 py-1 ${currentPath === '/' ? 'font-medium' : ''}`}
        onClick={handleClick}
      >
        Home
      </Link>
      <Link 
        to="/courses" 
        className={`text-wine-700 hover:text-wine-900 py-1 ${currentPath === '/courses' ? 'font-medium' : ''}`}
        onClick={handleClick}
      >
        Courses
      </Link>
      <Link 
        to="/tasting-room" 
        className={`text-wine-700 hover:text-wine-900 py-1 ${currentPath === '/tasting-room' ? 'font-medium' : ''}`}
        onClick={handleClick}
      >
        Tasting Room
      </Link>
      <Link 
        to="/about-us" 
        className={`text-wine-700 hover:text-wine-900 py-1 ${currentPath === '/about-us' ? 'font-medium' : ''}`}
        onClick={handleClick}
      >
        About Us
      </Link>
      <Link 
        to="/contact" 
        className="text-wine-700 hover:text-wine-900 py-1"
        onClick={handleClick}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
