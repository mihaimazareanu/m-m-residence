import {createContext, useState} from "react";

export const ReloadContext = createContext();

export function ReloadContextProvider({children}) {
  const [reload, setReload] = useState(true);
  
  return (
    <ReloadContext.Provider value={{reload, setReload}}>
      {children}
    </ReloadContext.Provider>
  );
}