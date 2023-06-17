/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DaisyStore } from '../../../redux/store';
import { ProteinResponse } from '../../../models';

interface ProteinContextProps {
  proteinId: string;
  activeTab: number;
  protein: ProteinResponse;
  handleSetTab: (tab: number) => void;
}

const ProteinContext = createContext<ProteinContextProps>(
  {} as ProteinContextProps
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function ProteinProvider({ children }: Props) {
  const proteinId = useParams().proteinId ?? '';
  const [activeTab, setActiveTab] = useState(0);

  const daisyState = useSelector((state: DaisyStore) => state.daisy);
  const { protein } = daisyState;

  const handleSetTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <ProteinContext.Provider
      value={{
        proteinId,
        activeTab,
        protein,
        handleSetTab,
      }}
    >
      {children}
    </ProteinContext.Provider>
  );
}

export const useProteinContext = () => {
  const context = useContext(ProteinContext);
  if (context === undefined) {
    throw new Error('useProteinContext must be used within a SearchProvider');
  }
  return context;
};
