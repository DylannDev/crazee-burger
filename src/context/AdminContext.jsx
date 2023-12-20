/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

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
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
