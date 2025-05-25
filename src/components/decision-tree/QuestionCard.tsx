
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

interface QuestionOption {
  id: string;
  text: string;
  nextStep?: string;
  end?: boolean;
  endMessage?: string;
  endTitle?: string;
  disabled?: boolean;
}

interface QuestionCardProps {
  title: string;
  description?: string;
  questionNumber: number;
  totalSteps?: number;
  stepCategory?: string;
  options: QuestionOption[];
  onSelect: (option: QuestionOption) => void;
  className?: string;
  tooltips?: {
    [key: string]: { title: string; content: string };
  };
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  description,
  questionNumber,
  totalSteps = 3,
  stepCategory = "Applicability Assessment",
  options,
  onSelect,
  className,
  tooltips,
}) => {
  const { toast } = useToast();

  const handleOptionClick = (option: QuestionOption) => {
    if (option.disabled) {
      toast({
        title: "Section Under Construction",
        description: "This section is still under construction. Please check back later.",
        variant: "destructive"
      });
      return;
    }
    onSelect(option);
  };

  // Check if the title contains words that have tooltips
  const renderTitleWithTooltips = () => {
    if (!tooltips) return title;
    
    // Simple word matching for tooltip triggers
    const words = Object.keys(tooltips);
    let titleContent = title;
    
    words.forEach(word => {
      if (title.toLowerCase().includes(word.toLowerCase())) {
        const regex = new RegExp(`(${word})`, 'gi');
        titleContent = titleContent.replace(regex, (match) => {
          return `###${match}###`;
        });
      }
    });
    
    if (titleContent === title) return title;
    
    const parts = titleContent.split('###');
    return (
      <>
        {parts.map((part, index) => {
          const lowerPart = part.toLowerCase();
          for (const word in tooltips) {
            if (lowerPart === word.toLowerCase()) {
              return (
                <span key={index} className="inline-flex items-center">
                  {part}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 p-0">
                        <Info className="h-4 w-4 text-whistleblower-accent" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card border-whistleblower-border">
                      <div className="space-y-2">
                        <h4 className="font-medium text-whistleblower-accent">{tooltips[word].title}</h4>
                        <div className="text-sm text-foreground whitespace-pre-line">
                          {tooltips[word].content}
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </span>
              );
            }
          }
          return part;
        })}
      </>
    );
  };

  return (
    <Card className={cn("w-full max-w-3xl border-whistleblower-border bg-card", className)}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-whistleblower-accent text-black font-semibold text-lg leading-none">
            {questionNumber}
          </div>
          <CardTitle className="text-xl flex items-center gap-1 text-foreground">
            {renderTitleWithTooltips()}
          </CardTitle>
        </div>
        {description && (
          <CardDescription className="mt-2 text-foreground opacity-75">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        {options.map((option) => {
          if (option.disabled) {
            return (
              <Tooltip key={option.id} delayDuration={200}>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      variant="outline"
                      disabled={true}
                      className={cn(
                        "w-full justify-start text-left h-auto py-4 px-4 border-whistleblower-border hover:bg-whistleblower-hover hover:border-whistleblower-accent whitespace-normal break-words min-h-[60px] text-foreground",
                        "opacity-50 cursor-not-allowed"
                      )}
                      onClick={() => handleOptionClick(option)}
                    >
                      <span className="line-clamp-none">{option.text}</span>
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="bg-whistleblower-accent text-white font-semibold text-base px-4 py-2 shadow-lg border-2 border-whistleblower-accent"
                >
                  <p>🚧 Under Construction</p>
                </TooltipContent>
              </Tooltip>
            );
          }

          return (
            <Button
              key={option.id}
              variant="outline"
              className={cn(
                "w-full justify-start text-left h-auto py-4 px-4 border-whistleblower-border hover:bg-whistleblower-hover hover:border-whistleblower-accent whitespace-normal break-words min-h-[60px] text-foreground"
              )}
              onClick={() => handleOptionClick(option)}
            >
              <span className="line-clamp-none">{option.text}</span>
            </Button>
          );
        })}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-whistleblower-border pt-4 text-sm text-foreground opacity-75">
        <div>
          Step {questionNumber} in {stepCategory}
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
