import React, { useContext, createContext, useState } from "react";

interface CursorProviderI {
  isHoveringProject: boolean | string;
  setIsHoveringProject: (val: boolean | string) => void;
}
//@ts-ignore
const StateContext = createContext<CursorProviderI>({});

//@ts-ignore
export const UserContextProvider = ({ children }) => {
  const [isHoveringProject, setIsHoveringProject] = useState<boolean | string>(
    false
  );

  return (
    <StateContext.Provider value={{ isHoveringProject, setIsHoveringProject }}>
      {children}
    </StateContext.Provider>
  );
};

export const useCursorContext = () => useContext(StateContext);
