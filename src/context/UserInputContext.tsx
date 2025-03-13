import { createContext, useContext, useState } from "react";

interface UserInputContextProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export const UserInputContext = createContext<UserInputContextProps>({
  userInput: "",
  setUserInput: () => {},
});

export const UserInputProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};

export const useUserInput = () => {
  const context = useContext(UserInputContext);

  if (!context) {
    throw new Error("useUserInput must be used within a UserInputProvider");
  }

  return context;
};
