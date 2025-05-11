
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-neural-800/30 bg-neural-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-neural-900/70 border border-neural-700/30 rounded-md flex items-center justify-center mr-2">
                <Brain className="w-6 h-6 text-neural-400" />
              </div>
              <span className="font-semibold text-xl">Peak Performers Program</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Redefine what's possible. Lead with power, live with purpose. A transformational journey for elite leaders.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-neural-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-neural-400 transition-colors">About</Link></li>
              <li><Link to="/methodology" className="text-muted-foreground hover:text-neural-400 transition-colors">Methodology</Link></li>
              <li><Link to="/offerings" className="text-muted-foreground hover:text-neural-400 transition-colors">Offerings</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-neural-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">contact@peakperformers.program</li>
              <li className="text-muted-foreground">+1 (888) 555-0123</li>
              <li className="text-muted-foreground">New York • London • Singapore</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-neural-400 hover:text-neural-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-neural-400 hover:text-neural-500 transition-colors">Twitter</a>
              <a href="#" className="text-neural-400 hover:text-neural-500 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-neural-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Peak Performers Program. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-neural-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-neural-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-neural-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
