
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ThankYouPageProps {
  resetWizard: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ resetWizard }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-whistleblower-border bg-card animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl text-center">Thank You for Your Report</CardTitle>
          <CardDescription className="text-center mt-2">
            Your report has been submitted successfully.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted flex justify-center">
            <div className="w-16 h-16 rounded-full bg-whistleblower-accent flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <p className="text-center">
            Your report has been processed successfully. Thank you for taking the time to complete this assessment. This information will be used to address your workplace concerns.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center border-t border-whistleblower-border pt-4">
          <Button
            variant="outline"
            className="border-whistleblower-border hover:bg-whistleblower-muted"
            onClick={resetWizard}
          >
            Start Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThankYouPage;
