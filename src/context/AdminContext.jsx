/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  return (
    <AdminContext.Provider
      value={{
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
