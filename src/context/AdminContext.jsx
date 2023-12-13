/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { EMPTY_PRODUCT } from "../enums/product";
// import { createCopy } from "../utils/maths";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menu, setMenu] = useState(MenuData);
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [editSelectedProduct, setEditSelectedProduct] = useState("");

  // Comportements
  const handleAddProduct = (newProduct) => {
    // 1 - copie du state
    const menuCopy = JSON.parse(JSON.stringify(menu));

    // 2 - Manipulation de la copie du state
    const newMenu = [newProduct, ...menuCopy];

    // 3 - Update du state
    setMenu(newMenu);
    showSuccessMessage();
  };

  const handleDeleteProduct = (ProductIdToDelete) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const newMenu = menuCopy.filter(
      (product) => product.id !== ProductIdToDelete
    );

    setMenu(newMenu);
  };

  const handleEditProduct = (productToEdit) => {
    // console.log(productToEdit);
    // 1 - copie du state (deep clone)
    const menuCopy = JSON.parse(JSON.stringify(menu));

    // 2 - Manipulation de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productToEdit.id
    );
    // console.log(indexOfProductToEdit);
    menuCopy[indexOfProductToEdit] = productToEdit;

    // 3 - Update du state
    setMenu(menuCopy);
  };

  const handleSelectProduct = (idCardClicked) => {
    const findSelectedProduct = menu.find(
      (product) => product.id === idCardClicked
    );
    setSelectedProduct(findSelectedProduct);
  };

  const showSuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
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
        isSubmitted,
        resetMenu,
        selectedProduct,
        setSelectedProduct,
        handleSelectProduct,
        handleEditProduct,
        editSelectedProduct,
        setEditSelectedProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
