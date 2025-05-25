
import React from 'react';

interface WizardProgressProps {
  questionNumber: number;
}

const WizardProgress: React.FC<WizardProgressProps> = ({ questionNumber }) => {
  return (
    <div className="mb-8 w-full max-w-3xl">
      <div className="w-full bg-whistleblower-muted h-4 rounded-full overflow-hidden">
        <div 
          className="bg-whistleblower-accent h-full transition-all duration-500"
          style={{ width: `${Math.min((questionNumber / 12) * 100, 100)}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>Step {questionNumber}</span>
        <span className="ml-4">Assessment Progress</span>
      </div>
    </div>
  );
};

export default WizardProgress;
