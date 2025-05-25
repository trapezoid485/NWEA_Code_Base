import { WizardStep } from '../types/wizardTypes';

export const applicabilitySteps: Record<string, WizardStep> = {
  "question-1": {
    id: "question-1",
    title: "Are you an employee under NWEA definitions?",
    description: "This assessment helps determine if the Norwegian Working Environment Act applies to your situation.",
    tooltips: {
      "employee": {
        title: "Employee Criteria",
        content: "• Personal service obligation\n• Under employer's direction/control\n• Integrated in employer's organization"
      }
    },
    options: [
      {
        id: "employee-yes",
        text: "Yes, I meet the employee criteria",
        nextStep: "question-2"
      },
      {
        id: "employee-no",
        text: "No, I'm self-employed, a contractor, or in another work arrangement",
        end: true,
        endTitle: "NWEA May Not Apply",
        endMessage: "The NWEA applies only to employment relationships. It does not apply if you are self-employed, a contractor, or in a non-subordinate work arragement."
      }
    ],
    category: "Applicability Assessment",
    totalSteps: 3
  },
  "question-2": {
    id: "question-2",
    title: "Is your work performed in Norway or for a Norwegian employer?",
    options: [
      {
        id: "norway-yes",
        text: "Yes, I work in Norway or for a Norwegian employer",
        nextStep: "question-3"
      },
      {
        id: "norway-no",
        text: "No, I work outside Norway for a non-Norwegian employer",
        end: true,
        endTitle: "NWEA May Not Apply",
        endMessage: "The NWEA primarily applies to work performed in Norway"
      }
    ],
    category: "Applicability Assessment",
    totalSteps: 3
  },
  "question-3": {
    id: "question-3",
    title: "Do you work in shipping, hunting and fishing (including processing catch on board), or military aviation?",
    options: [
      {
        id: "sector-yes",
        text: "Yes, I work in one of these specialized sectors",
        end: true,
        endTitle: "NWEA May Not Apply",
        endMessage: "Your Sector is regulated by special legislation. The NWEA does not apply according to Chapter 1, Section 1-2 (2) NWEA"
      },
      {
        id: "sector-no",
        text: "No, I don't work in any of these specialized sectors",
        nextStep: "initial-issue"
      }
    ],
    category: "Applicability Assessment",
    totalSteps: 3
  },
  "initial-issue": {
    id: "initial-issue",
    title: "Are you experiencing a problem at your workplace?",
    options: [
      {
        id: "issue-yes",
        text: "Yes, I'm experiencing a workplace issue",
        nextStep: "category-determination"
      },
      {
        id: "issue-no",
        text: "No, I'm just exploring this tool",
        end: true,
        endTitle: "No Current Issues",
        endMessage: "This tool addresses potential NWEA violations."
      }
    ],
    category: "Initial Issue Identification",
    totalSteps: 1
  },
  "category-determination": {
    id: "category-determination",
    title: "What is the primary nature of your concern?",
    options: [
      {
        id: "branch-a",
        text: "Working environment issues (physical workspace, psychological stress, adaptations, safety)",
        nextStep: "branch-a",
        disabled: true
      },
      {
        id: "branch-b",
        text: "Working hours or leave issues (hours, rest periods, overtime, leave entitlements)",
        nextStep: "branch-b",
        disabled: true
      },
      {
        id: "branch-c",
        text: "Discrimination or harassment (political views, age, employment type, gender, ethnicity, etc.)",
        nextStep: "branch-c",
        disabled: true
      },
      {
        id: "branch-d",
        text: "Employment contract or pay issues (missing contract, changes, temporary employment, pay)",
        nextStep: "branch-d",
        disabled: true
      },
      {
        id: "branch-e",
        text: "Termination or dismissal issues (invalid reason, procedure, notice period)",
        nextStep: "branch-e"
      },
      {
        id: "branch-f",
        text: "Retaliation for reporting issues (whistleblowing)",
        nextStep: "branch-f",
        disabled: true
      },
      {
        id: "branch-g",
        text: "Health and safety concerns (equipment, protective measures, ignored concerns, representation)",
        nextStep: "branch-g",
        disabled: true
      },
      {
        id: "branch-h",
        text: "Other rights and obligations",
        nextStep: "branch-h",
        disabled: true
      }
    ],
    category: "Category Determination",
    totalSteps: 1
  }
};
