import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
            <div className="p-4 rounded-full bg-whistleblower-accent/10 mb-4">
              <Shield className="w-12 h-12 text-whistleblower-accent" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-[#8E8D8A]">NWEA Whistleblower Protection Portal</h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              This secure platform helps identify potential violations of the Norwegian Working 
              Environment Act and guides you through the appropriate whistleblowing process.
            </p>
            
            <Link to="/assessment">
              <Button className="bg-whistleblower-accent hover:bg-whistleblower-accent/80 text-black font-medium px-6 py-6 h-auto">
                Start Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-whistleblower-border rounded-lg p-6 animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
              <h2 className="text-lg font-semibold mb-3 text-[#8E8D8A]">Secure & Anonymous</h2>
              <p className="text-muted-foreground">
                Your information is protected with end-to-end encryption. No identifying data is stored without your consent.
              </p>
            </div>
            
            <div className="bg-card border border-whistleblower-border rounded-lg p-6 animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
              <h2 className="text-lg font-semibold mb-3 text-[#8E8D8A]">Legal Framework</h2>
              <p className="text-muted-foreground">Assessment based on the Norwegian Working Environment Act.</p>
            </div>
            
            <div className="bg-card border border-whistleblower-border rounded-lg p-6 animate-fade-in" style={{
            animationDelay: "300ms"
          }}>
              <h2 className="text-lg font-semibold mb-3 text-[#8E8D8A]">Guided Process</h2>
              <p className="text-muted-foreground">
                Step-by-step guidance through the decision tree to identify violations and determine appropriate actions.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-whistleblower-accent/20 to-whistleblower-muted/30 rounded-xl p-8 border border-whistleblower-accent/20 animate-fade-in" style={{
          animationDelay: "400ms"
        }}>
            <h2 className="text-xl font-semibold mb-4 text-[#8E8D8A]">Protected by Norwegian Law</h2>
            <p className="text-muted-foreground mb-6">The Norwegian Working Environment Act Chapter 2A, Section 2A-4 protects whistleblowers from retaliation. You have the right to report violations without fear of negative consequences.</p>
            
            <div className="flex justify-center">
              <Link to="/assessment">
                <Button variant="outline" className="border-whistleblower-accent/40 hover:bg-whistleblower-accent/10">
                  Learn More About Your Rights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;