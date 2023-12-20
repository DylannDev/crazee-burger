/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { EMPTY_PRODUCT } from "../enums/product";
import { createCopy } from "../utils/array";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(MenuData);
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  // Comportements
  const handleAddProduct = (newProduct) => {
    // 1 - copie du state
    const menuCopy = createCopy(menu);

    // 2 - Manipulation de la copie du state
    const newMenu = [newProduct, ...menuCopy];

    // 3 - Update du state
    setMenu(newMenu);
  };

  const handleDeleteProduct = (ProductIdToDelete) => {
    const menuCopy = createCopy(menu);

    const newMenu = menuCopy.filter(
      (product) => product.id !== ProductIdToDelete
    );

    setMenu(newMenu);
  };

  const handleEditProduct = (productToEdit) => {
    // 1 - copie du state (deep clone)
    const menuCopy = createCopy(menu);

    // 2 - Manipulation de la copie du state
    const indexOfProductToEdit = menuCopy.findIndex(
      (menuProduct) => menuProduct.id === productToEdit.id
    );

    menuCopy[indexOfProductToEdit] = productToEdit;

    // 3 - Update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(MenuData);
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
        handleDeleteProduct,
        resetMenu,
        selectedProduct,
        setSelectedProduct,
        handleEditProduct,
        titleEditRef,
        newProduct,
        setNewProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
