/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DaisyStore } from '../../../redux/store';
import { DaisyResponse } from '../../../models';

interface SearchContextProps {
  processId: string;
  activeTab: number;
  response: DaisyResponse;
  loading: boolean;
  handleLoading: (value: boolean) => void;
  setSearchParams: (params: Record<string, string>) => void;
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [processId, setProcessId] = useState(
    searchParams.get('processID') ?? ''
  );
  const [activeTab, setActiveTab] = useState(0);

  const [loading, setLoading] = useState(false);

  const daisyState = useSelector((state: DaisyStore) => state.daisy);
  const { response } = daisyState;

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const handleSetTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessId(e.target.value.trim());
    setSearchParams({ processID: e.target.value.trim() });
  };

  return (
    <SearchContext.Provider
      value={{
        processId,
        activeTab,
        response,
        loading,
        handleLoading,
        setSearchParams,
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
