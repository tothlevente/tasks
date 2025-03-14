import { createContext, useContext, useEffect, useState } from "react";
import { getUserLanguage, setUserLanguage } from "@/services/languageService";
import { useTranslation } from "react-i18next";

interface SelectedLanguageContextProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedLanguageContext = createContext<SelectedLanguageContextProps>({
  selectedLanguage: "",
  setSelectedLanguage: () => {},
});

export const SelectedLanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    getUserLanguage() || "en"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    setUserLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <SelectedLanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </SelectedLanguageContext.Provider>
  );
};

export const useSelectedLanguage = () => {
  const context = useContext(SelectedLanguageContext);

  if (!context) {
    throw new Error("useSelectedLanguage must be used within a SelectedLanguageProvider");
  }

  return context;
};
