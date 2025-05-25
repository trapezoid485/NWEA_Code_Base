
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock } from 'lucide-react';
import { extractLegalReferences } from './utils/legalReferenceUtils';
import DescriptionTextarea from './components/DescriptionTextarea';
import FileUpload from './components/FileUpload';
import EmailInput from './components/EmailInput';
import ConsentCheckboxes from './components/ConsentCheckboxes';

interface DocumentationFormProps {
  questionNumber: number;
  documentationText: string;
  setDocumentationText: (text: string) => void;
  documentationFiles: FileList | null;
  setDocumentationFiles: (files: FileList | null) => void;
  consentChecked: boolean;
  setConsentChecked: (checked: boolean) => void;
  submitDocumentation: () => void;
  endTitle?: string;
  endMessage?: string;
}

const DocumentationForm: React.FC<DocumentationFormProps> = ({
  questionNumber,
  documentationText,
  setDocumentationText,
  documentationFiles,
  setDocumentationFiles,
  consentChecked,
  setConsentChecked,
  submitDocumentation,
  endTitle,
  endMessage
}) => {
  const [emailAddress, setEmailAddress] = React.useState<string>('');
  const [ngoContactConsent, setNgoContactConsent] = React.useState<boolean>(false);
  const [truthfulnessConfirmed, setTruthfulnessConfirmed] = React.useState<boolean>(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Alert className="mb-8 border-whistleblower-accent/30 bg-whistleblower-accent/15 p-6 text-base">
        <AlertDescription className="text-base font-medium">
          <p className="text-xl font-semibold mb-3 text-whistleblower-accent">Secure Report Submission</p>
          {endTitle && endMessage ? <>
              {extractLegalReferences(endMessage) || "Based on your responses, it appears that a rights violation might have taken place."}{" "}
              <p className="mt-3">To effectively help you, we need detailed information and preferably evidence about your situation.</p>
            </> : <p>Based on your responses, it appears that a rights violation might have taken place. To effectively help you, we need detailed information and preferably evidence about your situation.</p>}
          {" "}
          <p className="mt-3 font-bold">All reports are end-to-end encrypted. We never store your personal information without your consent.</p>
        </AlertDescription>
      </Alert>

      <Card className="border-whistleblower-border bg-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-whistleblower-accent text-black font-semibold">
              <Lock className="h-4 w-4" />
            </div>
            <CardTitle className="text-xl">
              Please provide a detailed description of what happened
            </CardTitle>
          </div>
          <CardDescription className="mt-2 text-muted-foreground">
            Be as precise as possible and try to use dates as references. All information is encrypted for your protection.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid gap-6">
            <DescriptionTextarea 
              value={documentationText} 
              onChange={setDocumentationText} 
            />

            <FileUpload 
              documentationFiles={documentationFiles}
              setDocumentationFiles={setDocumentationFiles}
            />

            <EmailInput 
              emailAddress={emailAddress}
              setEmailAddress={setEmailAddress}
            />

            <ConsentCheckboxes 
              ngoContactConsent={ngoContactConsent}
              setNgoContactConsent={setNgoContactConsent}
              consentChecked={consentChecked}
              setConsentChecked={setConsentChecked}
              truthfulnessConfirmed={truthfulnessConfirmed}
              setTruthfulnessConfirmed={setTruthfulnessConfirmed}
            />
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>End-to-end encryption applied automatically upon submission</span>
            </div>
            
            <Button 
              onClick={submitDocumentation} 
              disabled={!documentationText.trim() || !consentChecked || !truthfulnessConfirmed} 
              className="bg-whistleblower-accent text-white hover:bg-whistleblower-hover"
            >
              Submit Encrypted Report
            </Button>
          </div>
        </CardContent>
        
        <CardFooter className="border-t border-whistleblower-border pt-4 text-sm text-muted-foreground">
          <div>
            Final step: Secure Documentation and Reporting
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DocumentationForm;
