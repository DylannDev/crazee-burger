import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { createCopy } from "../utils/array";

export const useHandleMenu = () => {
  const [menu, setMenu] = useState(MenuData);
  console.log("menu ", menu);

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

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};
