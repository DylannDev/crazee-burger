import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { createCopy, deleteProduct } from "../utils/array";
import { syncBothMenus } from "../api/menu";

export const useHandleMenu = () => {
  const [menu, setMenu] = useState(MenuData.FULL);

  // Comportements
  const handleAddProduct = (newProduct, username) => {
    // 1 - copie du state
    const menuCopy = createCopy(menu);

    // 2 - Manipulation de la copie du state
    const newMenu = [newProduct, ...menuCopy];

    // 3 - Update du state
    setMenu(newMenu);
    syncBothMenus(username, newMenu);
  };

  const handleDeleteProduct = (productIdToDelete) => {
    const newMenu = deleteProduct(menu, productIdToDelete);
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
    setMenu(MenuData.FULL);
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
