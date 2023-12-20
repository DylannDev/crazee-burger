/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
<<<<<<< HEAD
import { useHandleMenu } from "../hooks/useHandleMenu";
=======
>>>>>>> 10885c746346ed78968a3852f325cfed70438ffa

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
<<<<<<< HEAD
  const {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useHandleMenu();
=======
>>>>>>> 10885c746346ed78968a3852f325cfed70438ffa

  return (
    <AdminContext.Provider
      value={{
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        selectedProduct,
        setSelectedProduct,
        titleEditRef,
        newProduct,
        setNewProduct,
        menu,
        setMenu,
        handleAddProduct,
        handleDeleteProduct,
        handleEditProduct,
        resetMenu,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
