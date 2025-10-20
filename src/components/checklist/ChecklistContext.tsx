import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ChecklistState {
  [checklistId: string]: {
    [itemId: string]: boolean;
  };
}

interface ChecklistContextType {
  checklistState: ChecklistState;
  toggleItem: (checklistId: string, itemId: string) => void;
  resetChecklist: (checklistId: string) => void;
  getProgress: (checklistId: string, totalItems: number) => number;
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

  const toggleItem = (checklistId: string, itemId: string) => {
    setChecklistState(prev => ({
      ...prev,
      [checklistId]: {
        ...(prev[checklistId] || {}),
        [itemId]: !(prev[checklistId]?.[itemId] || false)
      }
    }));
  };

  const resetChecklist = (checklistId: string) => {
    setChecklistState(prev => {
      const newState = { ...prev };
      delete newState[checklistId];
      return newState;
    });
  };

  const getProgress = (checklistId: string, totalItems: number) => {
    const completed = Object.values(checklistState[checklistId] || {}).filter(Boolean).length;
    return totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;
  };

  return (
    <ChecklistContext.Provider value={{ checklistState, toggleItem, resetChecklist, getProgress }}>
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
