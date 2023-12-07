/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { MenuData } from "../MenuData/MenuData";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(MenuData);

  const newProduct = {
    id: new Date().getTime(),
    imageSource: "/images/texane-barbecue.jpg",
    title: "Jambon Champignons",
    price: 14.898,
    description: "Sauce tomate, Jambon, Champignons, Oignons rouges",
    vegetarien: false,
  };

  const handleAddProduct = () => {
    // 1 - copie du state
    const menuCopy = [...menu];

    // 2 - Manipulation de la copie du state
    const newMenu = [newProduct, ...menuCopy];

    // 3 - Update du state
    setMenu(newMenu);
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
        setMenu,
        handleAddProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
