import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Globe } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const { toast } = useToast();

  const handleEmergencyEscape = () => {
    toast({
      title: "Quick escape activated",
      description: "Redirecting to a safe website..."
    });

    // In a real app, this would redirect to google or another safe site
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 500);
  };

  return (
    <header className="w-full border-b border-whistleblower-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-whistleblower-accent" />
          <Link to="/" className="text-lg font-semibold text-foreground">Norwegian Whistleblower Portal</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent hover:bg-whistleblower-accent/10 text-sm px-3">
                <Globe className="h-4 w-4" />
                EN
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border border-whistleblower-border">
              <DropdownMenuItem className="hover:bg-whistleblower-accent/10">
                English
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-whistleblower-accent/10">
                Norwegian
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-whistleblower-accent/10 text-sm px-3">Navigate</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <Link to="/" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/assessment" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        Assessment
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookies" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        Cookie Preferences
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            variant="destructive" 
            size="lg" 
            onClick={handleEmergencyEscape} 
            className="text-sm font-semibold bg-red-600 hover:bg-red-700 border-2 border-red-500 shadow-lg px-6 py-3 h-auto"
          >
            Quick Escape
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
