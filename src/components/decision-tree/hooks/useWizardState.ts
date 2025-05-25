
import { useState, useCallback } from 'react';
import { allSteps } from '../data/allSteps';
import { EndMessageData, WizardOption } from '../types/wizardTypes';
import { useToast } from '@/hooks/use-toast';

export const useWizardState = () => {
  const [currentStep, setCurrentStep] = useState<string>('question-1');
  const [visitedSteps, setVisitedSteps] = useState<string[]>(['question-1']);
  const [stepHistory, setStepHistory] = useState<string[]>(['question-1']);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(0);
  const [endData, setEndData] = useState<EndMessageData | null>(null);
  const [documentationText, setDocumentationText] = useState<string>('');
  const [documentationFiles, setDocumentationFiles] = useState<FileList | null>(null);
  const [consentChecked, setConsentChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const { toast } = useToast();

  // Handle option selection - updated to accept a WizardOption object
  const handleOptionSelect = useCallback((option: WizardOption) => {
    setSelectedOption(option.id);
    
    if (option.end && option.endTitle && option.endMessage) {
      setEndData({ title: option.endTitle, message: option.endMessage });
      return;
    }

    if (option.nextStep) {
      const newStep = option.nextStep;
      setCurrentStep(newStep);
      setVisitedSteps((prev) => {
        if (prev.includes(newStep)) return prev;
        return [...prev, newStep];
      });
      
      // Update step history for navigation
      setStepHistory(prev => {
        const newHistory = prev.slice(0, currentHistoryIndex + 1);
        return [...newHistory, newStep];
      });
      setCurrentHistoryIndex(prev => prev + 1);
    }
  }, [currentHistoryIndex]);

  // Go back to previous step
  const goBackStep = useCallback(() => {
    if (currentHistoryIndex > 0) {
      const newIndex = currentHistoryIndex - 1;
      const previousStep = stepHistory[newIndex];
      setCurrentStep(previousStep);
      setCurrentHistoryIndex(newIndex);
      setSelectedOption(null);
      setEndData(null);
    }
  }, [currentHistoryIndex, stepHistory]);

  // Go forward to next step (if user has been there before)
  const goForwardStep = useCallback(() => {
    if (currentHistoryIndex < stepHistory.length - 1) {
      const newIndex = currentHistoryIndex + 1;
      const nextStep = stepHistory[newIndex];
      setCurrentStep(nextStep);
      setCurrentHistoryIndex(newIndex);
      setSelectedOption(null);
      setEndData(null);
    }
  }, [currentHistoryIndex, stepHistory]);

  // Check if back navigation is available
  const canGoBack = currentHistoryIndex > 0;

  // Check if forward navigation is available
  const canGoForward = currentHistoryIndex < stepHistory.length - 1;

  // Reset the wizard
  const resetWizard = useCallback(() => {
    setCurrentStep('question-1');
    setVisitedSteps(['question-1']);
    setStepHistory(['question-1']);
    setCurrentHistoryIndex(0);
    setEndData(null);
    setDocumentationText('');
    setDocumentationFiles(null);
    setConsentChecked(false);
    setSelectedOption(null);
  }, []);

  // Submit documentation
  const submitDocumentation = useCallback(() => {
    // Here you would typically send the data to your backend
    console.log({
      documentationText,
      filesCount: documentationFiles?.length || 0,
    });

    toast({
      title: "Report submitted",
      description: "Your report has been submitted successfully.",
    });
    
    setCurrentStep('thank-you');
  }, [documentationText, documentationFiles, toast]);

  // Calculate the current question number based on current position in history
  const getQuestionNumber = useCallback(() => {
    return currentHistoryIndex + 1;
  }, [currentHistoryIndex]);

  return {
    currentStep,
    endData,
    documentationText,
    setDocumentationText,
    documentationFiles,
    setDocumentationFiles,
    consentChecked,
    setConsentChecked,
    handleOptionSelect,
    resetWizard,
    submitDocumentation,
    getQuestionNumber,
    selectedOption,
    goBackStep,
    goForwardStep,
    canGoBack,
    canGoForward
  };
};
