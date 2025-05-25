
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RotateCcw } from "lucide-react";

interface EndMessageProps {
  title: string;
  message: string;
  resetTree: () => void;
}

const EndMessage: React.FC<EndMessageProps> = ({
  title,
  message,
  resetTree,
}) => {
  return (
    <Card className="w-full max-w-3xl border-whistleblower-border bg-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl text-center text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-muted">
          <CardDescription className="text-base text-foreground whitespace-pre-line">
            {message}
          </CardDescription>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-whistleblower-border pt-4">
        <Button
          variant="outline"
          className="border-whistleblower-border hover:bg-whistleblower-muted text-foreground"
          onClick={resetTree}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Start Again
        </Button>
        
        <Link to="/">
          <Button variant="ghost" className="hover:bg-whistleblower-muted text-foreground">
            Return to Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EndMessage;
