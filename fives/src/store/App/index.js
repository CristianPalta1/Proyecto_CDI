import { useRouter } from 'next/router';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(undefined);
  const { locale } = useRouter();

  useEffect(() => {
    setCurrentLanguage(locale);
  }, [locale]);

  const values = useMemo(
    () => ({ currentLanguage, setCurrentLanguage }),
    [currentLanguage]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error('Error when try to mount App Context');
  }

  return context;
};
