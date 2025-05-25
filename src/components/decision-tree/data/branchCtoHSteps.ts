
import { WizardStep } from '../types/wizardTypes';

// Branch C: Discrimination or Harassment
export const branchCSteps: Record<string, WizardStep> = {
  "branch-c": {
    id: "branch-c",
    title: "Which discrimination or harassment issue are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "political-union",
        text: "Based on political views or union membership",
        nextStep: "documentation-step"
      },
      {
        id: "age-discrimination",
        text: "Based on age",
        nextStep: "documentation-step"
      },
      {
        id: "employment-type",
        text: "Based on employment type (part-time/temporary)",
        nextStep: "documentation-step"
      },
      {
        id: "protected-status",
        text: "Based on gender, ethnicity, religion, disability, sexual orientation",
        nextStep: "documentation-step"
      },
      {
        id: "harassment-bullying",
        text: "Harassment or bullying",
        nextStep: "documentation-step"
      }
    ],
    category: "Discrimination or Harassment",
    totalSteps: 2
  }
};

// Branch D: Employment Contract or Pay Issues
export const branchDSteps: Record<string, WizardStep> = {
  "branch-d": {
    id: "branch-d",
    title: "Which employment contract or pay issue are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "no-written-contract",
        text: "No written contract",
        nextStep: "documentation-step"
      },
      {
        id: "contract-changes",
        text: "Changes to contract without agreement",
        nextStep: "documentation-step"
      },
      {
        id: "temporary-employment",
        text: "Temporary employment issues",
        nextStep: "documentation-step"
      },
      {
        id: "pay-disputes",
        text: "Pay disputes",
        nextStep: "documentation-step"
      }
    ],
    category: "Employment Contract or Pay Issues",
    totalSteps: 2
  }
};

// Branch E: Termination or Dismissal Issues - New Interactive Decision Tree
export const branchESteps: Record<string, WizardStep> = {
  // E1: Primary Termination Question
  "branch-e": {
    id: "branch-e",
    title: "What is your main concern about your termination or dismissal?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "no-reason",
        text: "I was dismissed without any reason given",
        nextStep: "branch-e-no-reason"
      },
      {
        id: "invalid-reason",
        text: "I believe the reason for my dismissal was invalid",
        nextStep: "branch-e-invalid-reason"
      },
      {
        id: "process-issues",
        text: "I didn't receive proper notice or the dismissal process was wrong",
        nextStep: "branch-e-process-issues"
      },
      {
        id: "protected-period",
        text: "I was dismissed during a protected period (sick leave, parental leave, etc.)",
        nextStep: "branch-e-protected-period"
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E2a: No Reason Given
  "branch-e-no-reason": {
    id: "branch-e-no-reason",
    title: "Did your employer provide ANY explanation for the dismissal?",
    description: "You indicated you were dismissed without any stated reason.",
    options: [
      {
        id: "no-explanation",
        text: "No explanation at all",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Dismissal without valid reason",
        endMessage: "Your situation suggests a violation of §15-7(1) - Dismissal without valid reason. This may be grounds for an unfair dismissal claim."
      },
      {
        id: "vague-explanation",
        text: "Very vague explanation (e.g., \"not working out\")",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Insufficient justification",
        endMessage: "Your situation suggests a violation of §15-7(1) - Insufficient justification for dismissal. Vague reasons are typically not considered valid grounds."
      },
      {
        id: "refused-explanation",
        text: "They said \"no comment\" or refused to explain",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Dismissal without valid reason",
        endMessage: "Your situation suggests a violation of §15-7(1) - Dismissal without valid reason. Refusal to provide reasons is not in compliance with Norwegian labor law."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E2b: Invalid Reason for Dismissal
  "branch-e-invalid-reason": {
    id: "branch-e-invalid-reason",
    title: "What reason did your employer give for the dismissal?",
    description: "The reason provided will help determine if it constitutes a violation of the Working Environment Act.",
    options: [
      {
        id: "personal-characteristics",
        text: "Personal characteristics (age, gender, ethnicity, religion, etc.)",
        nextStep: "branch-e-personal-characteristics"
      },
      {
        id: "union-political",
        text: "Union membership/activities or political view",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1), §13-1(1) - Discrimination based on union membership",
        endMessage: "Your situation suggests a violation of §15-7(1) and §13-1(1) - Discrimination based on union membership or political views. This is prohibited under Norwegian law."
      },
      {
        id: "whistleblowing",
        text: "Previous whistleblowing",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1), §2A-4 - Retaliation for protected activity",
        endMessage: "Your situation suggests a violation of §15-7(1) and §2A-4 - Retaliation for protected activity. Dismissal due to whistleblowing is prohibited."
      },
      {
        id: "organizational-changes",
        text: "Dismissal due to curtailed operations or rationalisation measures",
        nextStep: "branch-e-organizational"
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E3b1: Personal Characteristics
  "branch-e-personal-characteristics": {
    id: "branch-e-personal-characteristics",
    title: "Which personal characteristic was mentioned or seemed to be the real reason?",
    description: "Dismissal based on these characteristics may constitute discrimination under Norwegian law.",
    options: [
      {
        id: "age-discrimination",
        text: "Age",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1), §13-1 - Age discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) and §13-1 - Age discrimination. Dismissal based on age is prohibited under the Working Environment Act."
      },
      {
        id: "gender-discrimination",
        text: "Gender",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Gender discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) - Gender discrimination. Dismissal based on gender is prohibited."
      },
      {
        id: "ethnicity-discrimination",
        text: "Ethnicity/race",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Ethnic discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) - Ethnic discrimination. Dismissal based on ethnicity or race is prohibited."
      },
      {
        id: "religion-discrimination",
        text: "Religion/beliefs",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Religious discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) - Religious discrimination. Dismissal based on religion or beliefs is prohibited."
      },
      {
        id: "disability-discrimination",
        text: "Disability",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Disability discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) - Disability discrimination. Dismissal based on disability is prohibited."
      },
      {
        id: "sexual-orientation",
        text: "Sexual orientation",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Sexual orientation discrimination",
        endMessage: "Your situation suggests a violation of §15-7(1) - Sexual orientation discrimination. Dismissal based on sexual orientation is prohibited."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E3b2: Organizational Changes
  "branch-e-organizational": {
    id: "branch-e-organizational",
    title: "Regarding the organizational changes/redundancy:",
    description: "This helps determine if the redundancy was genuine and handled properly under Norwegian law.",
    options: [
      {
        id: "alternative-position",
        text: "My employer could have offered me another suitable position in the company or group",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(2)/(3) – No alternative provided",
        endMessage: "Your situation suggests a violation of §15-7(2)/(3) - No alternative provided. Employers must consider suitable alternative positions."
      },
      {
        id: "no-alternatives",
        text: "There were no alternative positions open",
        nextStep: "documentation-step",
        endTitle: "NO VIOLATION",
        endMessage: "Based on the information provided, this appears to be a legitimate redundancy where no suitable alternatives were available."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E2c: Notice and Process Issues
  "branch-e-process-issues": {
    id: "branch-e-process-issues",
    title: "What was wrong with your dismissal process?",
    description: "Procedural errors can make a dismissal invalid under Norwegian labor law.",
    options: [
      {
        id: "insufficient-notice",
        text: "I didn't get enough notice",
        nextStep: "branch-e-insufficient-notice"
      },
      {
        id: "immediate-dismissal",
        text: "I was dismissed immediately without justification",
        nextStep: "branch-e-immediate-dismissal"
      },
      {
        id: "no-written-notice",
        text: "I didn't receive written notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-4(1) - No written dismissal notice",
        endMessage: "Your situation suggests a violation of §15-4(1) - No written dismissal notice. Dismissals must be provided in writing under Norwegian law."
      },
      {
        id: "no-consultation",
        text: "No consultation meeting was held",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-1(1) - No consultation meeting",
        endMessage: "Your situation suggests a violation of §15-1(1) - No consultation meeting. A meeting should be held before dismissal to discuss the grounds."
      },
      {
        id: "inadequate-consultation",
        text: "The consultation meeting was inadequate",
        nextStep: "branch-e-inadequate-consultation"
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E3c1: Insufficient Notice
  "branch-e-insufficient-notice": {
    id: "branch-e-insufficient-notice",
    title: "How long have you been employed and what notice did you receive?",
    description: "Notice periods in Norway depend on length of employment and age.",
    options: [
      {
        id: "less-than-5-years",
        text: "Less than 5 years employed, got less than 1 month notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(1) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(1) - Insufficient notice period. Employees with less than 5 years service are entitled to at least 1 month notice."
      },
      {
        id: "more-than-5-years",
        text: "More than 5 years employed, got less than 2 months notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(2) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(2) - Insufficient notice period. Employees with more than 5 years service are entitled to at least 2 months notice."
      },
      {
        id: "5-10-years",
        text: "5-10 years employed, got less than 3 months notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(2) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(2) - Insufficient notice period. Employees with 5-10 years service are entitled to at least 3 months notice."
      },
      {
        id: "10-years-over-50",
        text: "More than 10 years employed, over the age of 50, got less than 4 months notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(3) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(3) - Insufficient notice period. Employees with more than 10 years service over age 50 are entitled to at least 4 months notice."
      },
      {
        id: "10-years-over-55",
        text: "More than 10 years employed, over the age of 55 and got less than 5 months notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(3) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(3) - Insufficient notice period. Employees with more than 10 years service over age 55 are entitled to at least 5 months notice."
      },
      {
        id: "10-years-over-60",
        text: "More than 10 years employed, over the age of 60 and got less than 6 months notice",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-3(3) - Insufficient notice period",
        endMessage: "Your situation suggests a violation of §15-3(3) - Insufficient notice period. Employees with more than 10 years service over age 60 are entitled to at least 6 months notice."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E3c2: Summary Dismissal
  "branch-e-immediate-dismissal": {
    id: "branch-e-immediate-dismissal",
    title: "What reason was given for immediate dismissal?",
    description: "Immediate dismissal (without notice) requires serious misconduct under Norwegian law.",
    options: [
      {
        id: "no-reason-immediate",
        text: "No reason given",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-7(1) - Immediate dismissal without justification",
        endMessage: "Your situation suggests a violation of §15-7(1) - Immediate dismissal without justification. Summary dismissal requires serious misconduct."
      },
      {
        id: "minor-violation",
        text: "Minor rule violation",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-14(1) - Immediate dismissal disproportionate",
        endMessage: "Your situation suggests a violation of §15-14(1) - Immediate dismissal disproportionate because there was no gross breach of duty or serious breach of the contract of employment."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E3c3: Inadequate Consultation
  "branch-e-inadequate-consultation": {
    id: "branch-e-inadequate-consultation",
    title: "What was wrong with the consultation meeting?",
    description: "Consultation meetings must follow proper procedures under Norwegian law.",
    options: [
      {
        id: "no-representative",
        text: "I wasn't allowed to bring a union representative",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-1(1) - employee's elected representatives excluded",
        endMessage: "Your situation suggests a violation of §15-1(1) - employee's elected representatives excluded. Employees have the right to bring representatives to consultation meetings."
      },
      {
        id: "views-ignored",
        text: "My views weren't considered",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-1(1) - Inadequate consultation",
        endMessage: "Your situation suggests a violation of §15-1(1) - Inadequate consultation. Employers must genuinely consider employee views during consultations."
      },
      {
        id: "predetermined",
        text: "The decision seemed already made",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-1(1) - Predetermined outcome",
        endMessage: "Your situation suggests a violation of §15-1(1) - Predetermined outcome. Consultation must be genuine, not just a formality."
      },
      {
        id: "improper-notice",
        text: "I wasn't given proper notice of the meeting",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-1(1) - Improper meeting notice",
        endMessage: "Your situation suggests a violation of §15-1(1) - Improper meeting notice. Employees should have adequate time to prepare for consultation meetings."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  },
  
  // E2e: Protected Period Dismissal
  "branch-e-protected-period": {
    id: "branch-e-protected-period",
    title: "During which protected period were you dismissed?",
    description: "Norwegian law provides special protection against dismissal during certain periods.",
    options: [
      {
        id: "sick-leave",
        text: "During sick leave (first 12 months)",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-8(1) - Dismissal during sick leave",
        endMessage: "Your situation suggests a violation of §15-8(1) - Dismissal during sick leave. Employees are protected from dismissal during the first 12 months of sick leave."
      },
      {
        id: "pregnancy",
        text: "During pregnancy",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-9(2) - Dismissal during pregnancy",
        endMessage: "Your situation suggests a violation of §15-9(2) - Dismissal during pregnancy. Employees are protected from dismissal during pregnancy."
      },
      {
        id: "military-service",
        text: "During military service",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-10(1) - Dismissal during military service",
        endMessage: "Your situation suggests a violation of §15-10(1) - Dismissal during military service. Employees are protected from dismissal during military service."
      },
      {
        id: "safety-representative",
        text: "While serving as safety representative",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-8(4) - Dismissal of safety representative",
        endMessage: "Your situation suggests a violation of §15-8(4) - Dismissal of safety representative. Safety representatives have special protection against dismissal."
      },
      {
        id: "mandatory-retirement",
        text: "Due to mandatory retirement under age 70",
        nextStep: "documentation-step",
        endTitle: "VIOLATION: §15-13(a) - Illegal mandatory retirement",
        endMessage: "Your situation suggests a violation of §15-13(a) - Illegal mandatory retirement. Mandatory retirement under age 70 is generally not permitted."
      }
    ],
    category: "Termination or Dismissal Issues",
    totalSteps: 4
  }
};

// Branch F: Whistleblowing Retaliation
export const branchFSteps: Record<string, WizardStep> = {
  "branch-f": {
    id: "branch-f",
    title: "What type of retaliation after reporting issues are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "whistleblower-retaliation",
        text: "Retaliation after whistleblowing (threats, harassment, unjustified treatment, warnings, changes in duties, suspension, termination)",
        nextStep: "documentation-step"
      }
    ],
    category: "Whistleblowing Retaliation",
    totalSteps: 2
  }
};

// Branch G: Health and Safety Concerns
export const branchGSteps: Record<string, WizardStep> = {
  "branch-g": {
    id: "branch-g",
    title: "Which health and safety concern are you experiencing?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "unsafe-equipment",
        text: "Unsafe equipment or tools (missing safety devices, poor maintenance, lack of training)",
        nextStep: "documentation-step"
      },
      {
        id: "no-protective-measures",
        text: "Lack of protective measures (PPE, emergency procedures, safety information)",
        nextStep: "documentation-step"
      },
      {
        id: "ignored-concerns",
        text: "Safety concerns ignored by management (verbal/written reports, safety rep concerns)",
        nextStep: "documentation-step"
      },
      {
        id: "no-safety-rep",
        text: "No safety representative or committee (10+ employees for rep, 50+ for committee)",
        nextStep: "documentation-step"
      }
    ],
    category: "Health and Safety Concerns",
    totalSteps: 2
  }
};

// Branch H: Other Rights and Obligations
export const branchHSteps: Record<string, WizardStep> = {
  "branch-h": {
    id: "branch-h",
    title: "Which other right or obligation concern do you have?",
    description: "Select the category that best describes your situation.",
    options: [
      {
        id: "employee-duties",
        text: "Employee duties not fulfilled (safety cooperation, notification, equipment use)",
        nextStep: "documentation-step"
      },
      {
        id: "employer-obligations",
        text: "Employer not fulfilling obligations (working environment, HSE, cooperation)",
        nextStep: "documentation-step"
      },
      {
        id: "information-consultation",
        text: "Information and consultation issues (no meetings, major changes, no representation)",
        nextStep: "documentation-step"
      },
      {
        id: "control-measures",
        text: "Control measure concerns (monitoring, no consultation, disproportionate measures)",
        nextStep: "documentation-step"
      }
    ],
    category: "Other Rights and Obligations",
    totalSteps: 2
  }
};

// Documentation Step
export const documentationStep: Record<string, WizardStep> = {
  "documentation-step": {
    id: "documentation-step",
    title: "Please provide details about your situation",
    description: "Be as precise as possible and include relevant dates.",
    options: [
      {
        id: "submit",
        text: "Submit Report",
        nextStep: "thank-you"
      }
    ],
    category: "Documentation and Reporting",
    totalSteps: 1
  },
  "thank-you": {
    id: "thank-you",
    title: "Thank You for Your Report",
    description: "Your report has been submitted successfully.",
    options: [
      {
        id: "start-over",
        text: "Start Over",
        nextStep: "question-1"
      }
    ],
    category: "Documentation and Reporting",
    totalSteps: 1
  }
};
