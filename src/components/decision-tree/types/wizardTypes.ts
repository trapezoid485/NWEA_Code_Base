
import React from 'react';

export interface WizardOption {
  id: string;
  text: string;
  nextStep?: string;
  end?: boolean;
  endMessage?: string;
  endTitle?: string;
  disabled?: boolean;
}

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  options: WizardOption[];
  tooltips?: { [key: string]: { title: string; content: string } };
  category?: string;
  totalSteps?: number;
}

export interface EndMessageData {
  title: string;
  message: string;
}
