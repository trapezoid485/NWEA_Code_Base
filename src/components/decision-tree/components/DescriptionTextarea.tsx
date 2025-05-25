
import React from 'react';
import { Textarea } from "@/components/ui/textarea";

interface DescriptionTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const DescriptionTextarea: React.FC<DescriptionTextareaProps> = ({
  value,
  onChange
}) => {
  return (
    <div className="grid gap-3">
      <Textarea 
        placeholder="Describe your situation in detail..." 
        className="min-h-[200px] text-foreground bg-background border-whistleblower-border" 
        value={value} 
        onChange={e => onChange(e.target.value)} 
      />
    </div>
  );
};

export default DescriptionTextarea;
