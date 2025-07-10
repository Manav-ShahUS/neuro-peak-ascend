
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neural-700/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7068fcd5-d8da-43af-86fc-00ce6eca00fb.png" 
              alt="Peak Performance Program" 
              className="h-8 w-8"
            />
            <span className="font-bold text-lg">Peak Performance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              About
            </Link>
            <Link 
              to="/offerings" 
              className={`transition-colors ${isActive('/offerings') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Offerings
            </Link>
            <Link 
              to="/methodology" 
              className={`transition-colors ${isActive('/methodology') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Methodology
            </Link>
            <Link 
              to="/retreats" 
              className={`transition-colors ${isActive('/retreats') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Retreats
            </Link>
            <Link 
              to="/testimonials" 
              className={`transition-colors ${isActive('/testimonials') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/peak-performance-testing" 
              className={`transition-colors ${isActive('/peak-performance-testing') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
            >
              Testing
            </Link>
            <Button 
              className="bg-neural-600 hover:bg-neural-700 text-white"
              onClick={() => window.open('https://calendly.com/drdharmeshshah/peak-performance-consultation', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className={`block transition-colors ${isActive('/') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block transition-colors ${isActive('/about') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/offerings" 
              className={`block transition-colors ${isActive('/offerings') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Offerings
            </Link>
            <Link 
              to="/methodology" 
              className={`block transition-colors ${isActive('/methodology') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Methodology
            </Link>
            <Link 
              to="/retreats" 
              className={`block transition-colors ${isActive('/retreats') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Retreats
            </Link>
            <Link 
              to="/testimonials" 
              className={`block transition-colors ${isActive('/testimonials') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/peak-performance-testing" 
              className={`block transition-colors ${isActive('/peak-performance-testing') ? 'text-neural-400' : 'text-muted-foreground hover:text-neural-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Testing
            </Link>
            <Button 
              className="w-full bg-neural-600 hover:bg-neural-700 text-white"
              onClick={() => {
                window.open('https://calendly.com/drdharmeshshah/peak-performance-consultation', '_blank');
                setIsOpen(false);
              }}
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
