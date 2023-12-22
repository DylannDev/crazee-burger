/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
import { useHandleMenu } from "../hooks/useHandleMenu";
import { useHandleCart } from "../hooks/useHandleCart";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useHandleMenu();
  const { cart, handleAddToCart } = useHandleCart();

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
        cart,
        handleAddToCart,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
