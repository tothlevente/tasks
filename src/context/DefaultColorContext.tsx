import { getUserDefaultColor, setUserDefaultColor } from "@/services/defaultColorService";
import { createContext, useContext, useEffect, useState } from "react";
import { COLORS } from "@/constants/colors";

interface DefaultColorContextProps {
  defaultColor: string;
  setDefaultColor: React.Dispatch<React.SetStateAction<string>>;
}

export const DefaultColorContext = createContext<DefaultColorContextProps>({
  defaultColor: "",
  setDefaultColor: () => {},
});

export const DefaultColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [defaultColor, setDefaultColor] = useState<string>(
    () =>
      getUserDefaultColor() || COLORS.find((color) => color.name === "gray")!.colors.default
  );

  useEffect(() => {
    setUserDefaultColor(defaultColor);
  }, [defaultColor]);

  return (
    <DefaultColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </DefaultColorContext.Provider>
  );
};

export const useDefaultColor = () => {
  const context = useContext(DefaultColorContext);

  if (!context) {
    throw new Error("useDefaultColor must be used within a DefaultColorProvider");
  }

  return context;
};
