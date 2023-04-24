/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SearchContextProps {
  processId: string;
  activeTab: number;
  setSearchParams: (params: Record<string, string>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetTab: (tab: number) => void;
  updateProcessId: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function SearchProvider({ children }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [processId, setProcessId] = useState(
    searchParams.get('processID') ?? ''
  );
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessId(e.target.value.trim());
    setSearchParams({ processID: e.target.value.trim() });
  };

  const updateProcessId = (value: string) => {
    setProcessId(value);
  };

  return (
    <SearchContext.Provider
      value={{
        processId,
        activeTab,
        setSearchParams,
        handleChange,
        handleSetTab,
        updateProcessId,
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
