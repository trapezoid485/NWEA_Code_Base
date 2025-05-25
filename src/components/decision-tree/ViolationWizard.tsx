
import React from 'react';
import QuestionCard from './QuestionCard';
import StepTransition from '../animations/StepTransition';
import EndMessage from './EndMessage';
import DocumentationForm from './DocumentationForm';
import ThankYouPage from './ThankYouPage';
import WizardProgress from './WizardProgress';
import WizardNavigation from './WizardNavigation';
import { useWizardState } from './hooks/useWizardState';
import { allSteps } from './data/allSteps';

const ViolationWizard: React.FC = () => {
  const {
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
    canGoBack
  } = useWizardState();

  // Get the current step data
  const currentStepData = allSteps[currentStep];

  // Extract the potential violation information from the selected option
  const getViolationInfo = () => {
    if (!selectedOption || !currentStepData) return {
      title: undefined,
      message: undefined
    };

    // Find the selected option
    const option = currentStepData.options.find(opt => opt.id === selectedOption);
    if (option) {
      return {
        title: option.endTitle,
        message: option.endMessage
      };
    }
    return {
      title: undefined,
      message: undefined
    };
  };

  const {
    title: violationTitle,
    message: violationMessage
  } = getViolationInfo();

  // Show navigation only for regular question steps (not documentation or thank you)
  const showNavigation = !endData && 
    currentStep !== "documentation-step" && 
    currentStep !== "thank-you";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center relative">
      {!endData && (
        <div className="w-full max-w-3xl mx-auto">
          <WizardProgress questionNumber={getQuestionNumber()} />

          {currentStep === "documentation-step" && (
            <StepTransition>
              <DocumentationForm 
                questionNumber={getQuestionNumber()} 
                documentationText={documentationText} 
                setDocumentationText={setDocumentationText} 
                documentationFiles={documentationFiles} 
                setDocumentationFiles={setDocumentationFiles} 
                consentChecked={consentChecked} 
                setConsentChecked={setConsentChecked} 
                submitDocumentation={submitDocumentation} 
                endTitle={violationTitle} 
                endMessage={violationMessage} 
              />
            </StepTransition>
          )}
          
          {currentStep === "thank-you" && (
            <StepTransition>
              <ThankYouPage resetWizard={resetWizard} />
            </StepTransition>
          )}

          {currentStep !== "documentation-step" && currentStep !== "thank-you" && currentStepData && (
            <StepTransition>
              <QuestionCard 
                title={currentStepData.title} 
                description={currentStepData.description} 
                questionNumber={getQuestionNumber()} 
                totalSteps={currentStepData.totalSteps || 3} 
                stepCategory={currentStepData.category || "Assessment"} 
                options={currentStepData.options} 
                onSelect={handleOptionSelect} 
                tooltips={currentStepData.tooltips} 
              />
            </StepTransition>
          )}

          {showNavigation && (
            <WizardNavigation
              onGoBack={goBackStep}
              canGoBack={canGoBack}
            />
          )}
        </div>
      )}

      {endData && (
        <EndMessage 
          title={endData.title} 
          message={endData.message} 
          resetTree={resetWizard} 
        />
      )}

      <div className="mt-6 text-xs text-muted-foreground text-center">
        <p>This assessment tool provides guidance based on the Norwegian Working Environment Act. It does <span className="font-semibold text-whistleblower-accent">not</span> constitute <span className="font-semibold text-whistleblower-accent">legal advice</span>.</p>
      </div>
    </div>
  );
};

export default ViolationWizard;
