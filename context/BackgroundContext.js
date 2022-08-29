import { createContext, useState } from "react";

export const BackgroundContext = createContext();

const BackgroundContextProvider = ({ children }) => {
  const [background, setBackground] = useState(false);
  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;
