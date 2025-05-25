
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Info } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  documentationFiles: FileList | null;
  setDocumentationFiles: (files: FileList | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  documentationFiles,
  setDocumentationFiles
}) => {
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocumentationFiles(e.target.files);
      toast({
        title: "Files attached",
        description: `${e.target.files.length} file(s) attached to your report`,
        duration: 2000
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="w-full">
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex items-center gap-2 p-3 border border-dashed border-whistleblower-border rounded-md hover:bg-whistleblower-muted/50 transition-colors">
            <Upload className="h-5 w-5 text-whistleblower-accent" />
            <span>Upload documentation</span>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                  <Info className="h-4 w-4 text-whistleblower-accent" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Supporting Evidence</h4>
                  <p className="text-sm text-muted-foreground">
                    Upload witness statements, medical/expert reports, pictures, or any other documentation that supports your case.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <input 
            id="file-upload" 
            type="file" 
            multiple 
            className="hidden" 
            onChange={handleFileChange} 
          />
        </label>
      </div>
      
      {documentationFiles && documentationFiles.length > 0 && (
        <div className="text-sm text-whistleblower-accent">
          {documentationFiles.length} file(s) selected
        </div>
      )}
    </div>
  );
};

export default FileUpload;
