/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

interface SearchContextProps {
  search: string;
  activeTab: number;
  setSearch: (search: string) => void;
  handleSetTab: (tab: number) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function SearchProvider({ children }: Props) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        activeTab,
        setSearch,
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
