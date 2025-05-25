
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [showWatermark, setShowWatermark] = useState(false);

  return (
    <footer className="w-full border-t border-whistleblower-border py-4 mt-10 relative">
      {/* Watermark that appears on hover */}
      <div 
        className={`absolute -top-8 left-4 transition-opacity duration-300 cursor-default ${
          showWatermark ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDelay: showWatermark ? '1300ms' : '0ms'
        }}
      >
        <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded shadow-sm">
          Prototype designed and implemented by JoR
        </span>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div 
            className="text-sm text-muted-foreground"
            onMouseEnter={() => setShowWatermark(true)}
            onMouseLeave={() => setShowWatermark(false)}
          >
            © {new Date().getFullYear()} NWEA Whistleblower Portal. All inquiries are secure and confidential.
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              Home
            </Link>
            <Link to="/assessment" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              Assessment
            </Link>
            <Link to="/about-us" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              About Us
            </Link>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              Cookie Preferences
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-whistleblower-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
