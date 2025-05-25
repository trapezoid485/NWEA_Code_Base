
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Mail, Info } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface EmailInputProps {
  emailAddress: string;
  setEmailAddress: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  emailAddress,
  setEmailAddress
}) => {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-whistleblower-accent" />
        <label htmlFor="email" className="text-sm font-bold">
          Email Address (Optional)
        </label>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <Info className="h-4 w-4 text-whistleblower-accent" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Anonymous Email Options</h4>
              <p className="text-sm text-muted-foreground">To maintain anonymity, consider using temporary email services like ProtonMail. You can create a new email account specifically for this report.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Input 
        id="email" 
        type="email" 
        placeholder="your.email@example.com" 
        value={emailAddress} 
        onChange={e => setEmailAddress(e.target.value)} 
        className="text-foreground bg-background border-whistleblower-border" 
      />
      <p className="text-xs text-muted-foreground">
        Providing an email allows us to contact you for follow-up questions or updates. For privacy, consider using an anonymous email service.
      </p>
    </div>
  );
};

export default EmailInput;
