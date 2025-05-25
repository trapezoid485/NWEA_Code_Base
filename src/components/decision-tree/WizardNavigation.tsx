
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface WizardNavigationProps {
  onGoBack: () => void;
  canGoBack: boolean;
}

const WizardNavigation: React.FC<WizardNavigationProps> = ({
  onGoBack,
  canGoBack,
}) => {
  return (
    <div className="flex justify-start items-center mt-6 w-full max-w-3xl mx-auto">
      <Button
        variant="default"
        onClick={onGoBack}
        disabled={!canGoBack}
        className="flex items-center gap-2 bg-whistleblower-accent hover:bg-whistleblower-hover text-white font-semibold px-6 py-3 text-base shadow-lg"
      >
        <ArrowLeft className="h-5 w-5" />
        Go Back
      </Button>
    </div>
  );
};

export default WizardNavigation;
