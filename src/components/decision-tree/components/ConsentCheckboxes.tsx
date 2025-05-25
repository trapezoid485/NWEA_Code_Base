
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

interface ConsentCheckboxesProps {
  ngoContactConsent: boolean;
  setNgoContactConsent: (checked: boolean) => void;
  consentChecked: boolean;
  setConsentChecked: (checked: boolean) => void;
  truthfulnessConfirmed: boolean;
  setTruthfulnessConfirmed: (checked: boolean) => void;
}

const ConsentCheckboxes: React.FC<ConsentCheckboxesProps> = ({
  ngoContactConsent,
  setNgoContactConsent,
  consentChecked,
  setConsentChecked,
  truthfulnessConfirmed,
  setTruthfulnessConfirmed
}) => {
  return (
    <>
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="ngo-contact" 
          checked={ngoContactConsent} 
          onCheckedChange={checked => setNgoContactConsent(checked === true)} 
          className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
        />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="ngo-contact" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
            I agree to be contacted by the NGO via the provided email address (Optional)
          </label>
          <p className="text-xs text-muted-foreground">
            Check this box if you consent to being contacted by our partner NGO for additional support or follow-up regarding your case.
          </p>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-2">
        <Checkbox 
          id="consent" 
          checked={consentChecked} 
          onCheckedChange={checked => setConsentChecked(checked === true)} 
          className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
        />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="consent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
            I consent to the processing of my personal data
          </label>
          <p className="text-xs text-muted-foreground">
            By submitting this report, I consent to the processing of my personal data in accordance with the <Link to="/privacy-policy" className="text-whistleblower-accent hover:underline">Privacy Policy</Link>. I understand that my data will be processed only as necessary for investigating my report.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox 
          id="truthfulness" 
          checked={truthfulnessConfirmed} 
          onCheckedChange={checked => setTruthfulnessConfirmed(checked === true)} 
          className="data-[state=checked]:bg-whistleblower-accent data-[state=checked]:border-whistleblower-accent" 
        />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="truthfulness" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8E8D8A]">
            I confirm that the information and documentation provided in this report is truthful and honest
          </label>
          <p className="text-xs text-muted-foreground">
            I understand that there may be labor and criminal consequences if I <span className="font-bold">intentionally</span> submit false or misleading information.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsentCheckboxes;
