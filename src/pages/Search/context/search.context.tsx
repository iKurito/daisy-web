/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

interface SearchContextProps {
  processId: string;
  activeTab: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetTab: (tab: number) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function SearchProvider({ children }: Props) {
  const [processId, setProcessId] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessId(e.target.value.trim());
  };

  return (
    <SearchContext.Provider
      value={{
        processId,
        activeTab,
        handleChange,
        handleSetTab,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
