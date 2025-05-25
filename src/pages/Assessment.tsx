
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ViolationWizard from '@/components/decision-tree/ViolationWizard';

const Assessment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-whistleblower-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center text-foreground">NWEA Violation Assessment</h1>
          <p className="text-foreground mb-8 text-center max-w-2xl mx-auto opacity-80">
            Answer the following questions to determine if your situation involves a potential violation 
            of the Norwegian Working Environment Act.
          </p>
          
          <ViolationWizard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessment;
