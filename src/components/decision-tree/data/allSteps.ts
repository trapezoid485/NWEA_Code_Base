
import { WizardStep } from '../types/wizardTypes';
import { applicabilitySteps } from './applicabilitySteps';
import { branchASteps } from './branchASteps';
import { branchBSteps } from './branchBSteps';
import { 
  branchCSteps, 
  branchDSteps, 
  branchESteps,
  branchFSteps,
  branchGSteps,
  branchHSteps,
  documentationStep 
} from './branchCtoHSteps';

// Combine all the steps
export const allSteps: Record<string, WizardStep> = { 
  ...applicabilitySteps, 
  ...branchASteps, 
  ...branchBSteps,
  ...branchCSteps,
  ...branchDSteps,
  ...branchESteps,
  ...branchFSteps,
  ...branchGSteps,
  ...branchHSteps,
  ...documentationStep
};
