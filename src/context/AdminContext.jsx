/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { MenuData } from "../MenuData/MenuData";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(MenuData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddProduct = (newProduct) => {
    // 1 - copie du state
    const menuCopy = [...menu];

    // 2 - Manipulation de la copie du state
    const newMenu = [newProduct, ...menuCopy];

    // 3 - Update du state
    setMenu(newMenu);
    showSuccessMessage();
  };

  const showSuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <AdminContext.Provider
      value={{
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        handleAddProduct,
        isSubmitted,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
