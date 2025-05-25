
import { WizardStep } from '../types/wizardTypes';

export const branchBSteps: Record<string, WizardStep> = {
  "branch-b": {
    id: "branch-b",
    title: "Which working hours or leave issue are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "excessive-hours",
        text: "Excessive working hours (daily/weekly maximum exceeded, no averaging agreement)",
        nextStep: "branch-b-excessive"
      },
      {
        id: "insufficient-rest",
        text: "Insufficient rest periods (no breaks, insufficient daily/weekly rest)",
        nextStep: "branch-b-rest"
      },
      {
        id: "overtime-issues",
        text: "Overtime compensation issues (unpaid overtime, excessive/forced overtime)",
        nextStep: "branch-b-overtime"
      },
      {
        id: "leave-issues",
        text: "Leave entitlement problems (parental, pregnancy/maternity, care responsibilities)",
        nextStep: "branch-b-leave"
      }
    ],
    category: "Working Hours or Leave Issues",
    totalSteps: 2
  },
  "branch-b-excessive": {
    id: "branch-b-excessive",
    title: "What excessive working hours issue are you experiencing?",
    options: [
      {
        id: "daily-weekly-max",
        text: "Daily or weekly maximum exceeded",
        nextStep: "documentation-step"
      },
      {
        id: "no-averaging",
        text: "No proper averaging agreement for variable hours",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Hours or Leave Issues",
    totalSteps: 2
  },
  "branch-b-rest": {
    id: "branch-b-rest",
    title: "What rest period issue are you experiencing?",
    options: [
      {
        id: "no-breaks",
        text: "No breaks during work day",
        nextStep: "documentation-step"
      },
      {
        id: "insufficient-daily-weekly",
        text: "Insufficient daily or weekly rest periods",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Hours or Leave Issues",
    totalSteps: 2
  },
  "branch-b-overtime": {
    id: "branch-b-overtime",
    title: "What overtime issue are you experiencing?",
    options: [
      {
        id: "unpaid-overtime",
        text: "Unpaid overtime work",
        nextStep: "documentation-step"
      },
      {
        id: "excessive-forced",
        text: "Excessive or forced overtime",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Hours or Leave Issues",
    totalSteps: 2
  },
  "branch-b-leave": {
    id: "branch-b-leave",
    title: "What leave entitlement issue are you experiencing?",
    options: [
      {
        id: "parental-leave",
        text: "Parental leave denied or restricted",
        nextStep: "documentation-step"
      },
      {
        id: "pregnancy-maternity",
        text: "Pregnancy or maternity leave denied",
        nextStep: "documentation-step"
      },
      {
        id: "care-responsibilities",
        text: "Leave for care responsibilities denied",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Hours or Leave Issues",
    totalSteps: 2
  }
};
