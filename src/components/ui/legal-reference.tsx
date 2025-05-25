
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface LegalReferenceProps {
  children: React.ReactNode;
  section: string;
  description: string;
  className?: string;
}

const LegalReference: React.FC<LegalReferenceProps> = ({
  children,
  section,
  description,
  className,
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className={cn("legal-reference", className)}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm bg-whistleblower-background border-whistleblower-border">
          <div className="space-y-2">
            <p className="font-semibold text-whistleblower-accent">{section}</p>
            <p className="text-sm text-foreground">{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LegalReference;
