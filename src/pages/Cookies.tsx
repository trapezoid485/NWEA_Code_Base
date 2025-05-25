import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
const Cookies = () => {
  const {
    toast
  } = useToast();
  const [preferences, setPreferences] = useState({
    necessary: true,
    // Always true, can't be changed
    functional: false,
    analytics: false
  });
  const handlePreferenceChange = (category: 'functional' | 'analytics') => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    toast({
      title: "Cookie preferences saved",
      description: "Your cookie preferences have been updated"
    });
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Cookie Preferences</h1>
          <p className="text-muted-foreground mb-8">
            Control how cookies are used on this site.
          </p>
          
          <Card className="mb-8 border-whistleblower-border bg-card">
            <CardHeader>
              <CardTitle>Cookie Settings</CardTitle>
              <CardDescription>
                Customize which cookies you want to allow. Learn more about what cookies we use in our Privacy Policy.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="necessary" className="text-foreground">Necessary Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for the proper functioning of the website. They cannot be disabled.
                  </p>
                </div>
                <Switch id="necessary" checked={true} disabled />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="functional" className="text-foreground">Functional Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    These cookies enable personalized features and save your preferences.
                  </p>
                </div>
                <Switch id="functional" checked={preferences.functional} onCheckedChange={() => handlePreferenceChange('functional')} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="text-foreground">Analytics Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch id="analytics" checked={preferences.analytics} onCheckedChange={() => handlePreferenceChange('analytics')} />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="bg-whistleblower-accent hover:bg-whistleblower-accent/80 text-black font-medium" onClick={savePreferences}>
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold">About Our Cookies</h2>
            <p>
              Cookies are small text files that are stored on your browser or device. They allow us to recognize your browser 
              and capture certain information.
            </p>
            
            
            <ul>
              
              
              
              
            </ul>
            
            
            
            
            
            
            
            
            
            
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Cookies;