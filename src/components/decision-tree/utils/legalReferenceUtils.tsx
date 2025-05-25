
import React from 'react';
import LegalReference from "@/components/ui/legal-reference";

// Get description for specific legal sections
export const getLegalDescription = (section: string) => {
  const descriptions: Record<string, string> = {
    "15-1": "Consultation before dismissal: Employee has the right to be consulted before dismissal",
    "15-2": "Collective dismissals: Special procedures for mass layoffs",
    "15-3": "Notice periods: Required minimum notice based on length of service",
    "15-4": "Formal requirements for notice: Written notice with specific information",
    "15-5": "Consequences of formal errors: Potential invalidity of dismissal",
    "15-6": "Trial periods: Special rules for dismissal during trial periods",
    "15-7": "Protection against unfair dismissal: Dismissal must have valid reason",
    "15-8": "Protection against dismissal during illness: Protection during first 12 months of sick leave",
    "15-9": "Protection against dismissal during pregnancy/leave: Protection during pregnancy and parental leave",
    "14-9": "Temporary employment: Limitations on temporary contracts",
    "13-1": "Prohibition against discrimination: Protection from workplace discrimination",
    "2A-4": "Protection against retaliation: Protection for whistleblowers"
  };

  // Handle section numbers with subsections
  const baseSection = section.split("(")[0];
  return descriptions[baseSection] || "Relevant section of the Working Environment Act";
};

// Extract legal section references from endMessage if available
export const extractLegalReferences = (endMessage: string | undefined) => {
  if (!endMessage) return null;
  const sectionMatch = endMessage.match(/§(\d+-\d+(?:\(\d+\))?)(?:,\s*§(\d+-\d+(?:\(\d+\))?))?/);
  if (!sectionMatch) return null;
  const primarySection = sectionMatch[1];
  return <span>
      Based on your responses, there may be a violation of{" "}
      <LegalReference section={`§${primarySection}`} description={getLegalDescription(primarySection)}>
        §{primarySection}
      </LegalReference>
      {sectionMatch[2] && <>
          {" and "}
          <LegalReference section={`§${sectionMatch[2]}`} description={getLegalDescription(sectionMatch[2])}>
            §{sectionMatch[2]}
          </LegalReference>
        </>}
      {" of the Norwegian Working Environment Act."}
    </span>;
};
