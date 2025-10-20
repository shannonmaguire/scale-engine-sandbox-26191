import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AssessmentAnswer = "yes" | "partial" | "no" | null;

interface ChecklistState {
  [checklistId: string]: {
    [itemId: string]: AssessmentAnswer;
  };
}

interface ChecklistContextType {
  checklistState: ChecklistState;
  setAnswer: (checklistId: string, itemId: string, value: AssessmentAnswer) => void;
  toggleItem: (checklistId: string, itemId: string) => void; // Deprecated, kept for backwards compatibility
  resetChecklist: (checklistId: string) => void;
  getProgress: (checklistId: string, totalItems: number) => number;
  getUnansweredCount: (checklistId: string, totalItems: number) => number;
  getAnswerCounts: (checklistId: string) => { yes: number; partial: number; no: number; unanswered: number };
}

const ChecklistContext = createContext<ChecklistContextType | undefined>(undefined);

export const ChecklistProvider = ({ children }: { children: ReactNode }) => {
  const [checklistState, setChecklistState] = useState<ChecklistState>(() => {
    const saved = localStorage.getItem('cwt-checklists');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem('cwt-checklists', JSON.stringify(checklistState));
    }, 500);

    return () => clearTimeout(handler);
  }, [checklistState]);

  const setAnswer = (checklistId: string, itemId: string, value: AssessmentAnswer) => {
    setChecklistState(prev => ({
      ...prev,
      [checklistId]: {
        ...(prev[checklistId] || {}),
        [itemId]: value
      }
    }));
  };

  // Deprecated: kept for backwards compatibility with old checkbox-based checklists
  const toggleItem = (checklistId: string, itemId: string) => {
    setChecklistState(prev => {
      const currentValue = prev[checklistId]?.[itemId];
      const newValue = currentValue === "yes" ? null : "yes";
      return {
        ...prev,
        [checklistId]: {
          ...(prev[checklistId] || {}),
          [itemId]: newValue
        }
      };
    });
  };

  const resetChecklist = (checklistId: string) => {
    setChecklistState(prev => {
      const newState = { ...prev };
      delete newState[checklistId];
      return newState;
    });
  };

  const getProgress = (checklistId: string, totalItems: number) => {
    const answers = Object.values(checklistState[checklistId] || {});
    const totalScore = answers.reduce((sum, answer) => {
      if (answer === "yes") return sum + 100;
      if (answer === "partial") return sum + 50;
      return sum;
    }, 0);
    const maxPossibleScore = totalItems * 100;
    return maxPossibleScore > 0 ? Math.round(totalScore / maxPossibleScore * 100) : 0;
  };

  const getUnansweredCount = (checklistId: string, totalItems: number) => {
    const answers = Object.values(checklistState[checklistId] || {});
    const answeredCount = answers.filter(a => a !== null).length;
    return totalItems - answeredCount;
  };

  const getAnswerCounts = (checklistId: string) => {
    const answers = Object.values(checklistState[checklistId] || {});
    return {
      yes: answers.filter(a => a === "yes").length,
      partial: answers.filter(a => a === "partial").length,
      no: answers.filter(a => a === "no").length,
      unanswered: answers.filter(a => a === null).length
    };
  };

  return (
    <ChecklistContext.Provider value={{ 
      checklistState, 
      setAnswer,
      toggleItem, 
      resetChecklist, 
      getProgress, 
      getUnansweredCount,
      getAnswerCounts 
    }}>
      {children}
    </ChecklistContext.Provider>
  );
};

export const useChecklist = () => {
  const context = useContext(ChecklistContext);
  if (!context) {
    throw new Error('useChecklist must be used within ChecklistProvider');
  }
  return context;
};
