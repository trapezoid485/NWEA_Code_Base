
import { WizardStep } from '../types/wizardTypes';

export const branchASteps: Record<string, WizardStep> = {
  "branch-a": {
    id: "branch-a",
    title: "Which working environment issue are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "physical-workspace",
        text: "Physical workspace problems (building/equipment issues, ergonomic problems, safety devices)",
        nextStep: "branch-a-physical"
      },
      {
        id: "psychological",
        text: "Psychological stress or poor social climate (harassment, bullying, isolation, negative control)",
        nextStep: "branch-a-psychological"
      },
      {
        id: "adaptations",
        text: "Lack of adaptations for personal needs (age, skill, or capacity-related)",
        nextStep: "branch-a-adaptations"
      },
      {
        id: "unsafe",
        text: "Unsafe conditions (health risks, lack of training, inadequate prevention)",
        nextStep: "branch-a-unsafe"
      }
    ],
    category: "Working Environment Issues",
    totalSteps: 2
  },
  "branch-a-physical": {
    id: "branch-a-physical",
    title: "What physical workspace problem are you experiencing?",
    options: [
      {
        id: "building-equipment",
        text: "Building or equipment issues",
        nextStep: "documentation-step"
      },
      {
        id: "ergonomic",
        text: "Ergonomic problems",
        nextStep: "documentation-step"
      },
      {
        id: "safety-device",
        text: "Safety device concerns",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Environment Issues",
    totalSteps: 2
  },
  "branch-a-psychological": {
    id: "branch-a-psychological",
    title: "What psychological issue are you experiencing?",
    options: [
      {
        id: "harassment-bullying",
        text: "Harassment or bullying",
        nextStep: "documentation-step"
      },
      {
        id: "isolation",
        text: "Isolation",
        nextStep: "documentation-step"
      },
      {
        id: "negative-control",
        text: "Negative control measures",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Environment Issues",
    totalSteps: 2
  },
  "branch-a-adaptations": {
    id: "branch-a-adaptations",
    title: "What adaptation issue are you experiencing?",
    options: [
      {
        id: "age-related",
        text: "Age-related adaptations not provided",
        nextStep: "documentation-step"
      },
      {
        id: "skill-related",
        text: "Skill-related adaptations not provided",
        nextStep: "documentation-step"
      },
      {
        id: "capacity-related",
        text: "Capacity-related adaptations not provided",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Environment Issues",
    totalSteps: 2
  },
  "branch-a-unsafe": {
    id: "branch-a-unsafe",
    title: "What unsafe condition are you experiencing?",
    options: [
      {
        id: "health-risks",
        text: "Health risks",
        nextStep: "documentation-step"
      },
      {
        id: "lack-training",
        text: "Lack of training",
        nextStep: "documentation-step"
      },
      {
        id: "inadequate-prevention",
        text: "Inadequate prevention measures",
        nextStep: "documentation-step"
      }
    ],
    category: "Working Environment Issues",
    totalSteps: 2
  }
};
