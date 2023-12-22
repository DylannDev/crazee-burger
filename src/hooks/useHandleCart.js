import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { createCopy, findInArray } from "../utils/array";

export const useHandleCart = () => {
  const [cart, setCart] = useState(MenuData.EMPTY);

  const handleAddToCart = (productToAdd) => {
    // 1 - copie du state
    const cartCopy = createCopy(cart);

    const isProductAlreadyInCart = findInArray(cartCopy, productToAdd.id);

    if (!isProductAlreadyInCart) {
      const newCartProduct = {
        ...productToAdd,
        quantity: 1,
      };

      // 2 - Manipulation de la copie du state
      const cartUpdated = [newCartProduct, ...cartCopy];

      // 3 - Update du state
      setCart(cartUpdated);
    } else {
      const indexOfProductInCartToIncrement = cartCopy.findIndex(
        (cartProduct) => cartProduct.id === productToAdd.id
      );

      cartCopy[indexOfProductInCartToIncrement].quantity += 1;

      setCart(cartCopy);
    }
  };

  const handleDeleteProductFromCart = (productIdToDelete) => {
    const cartCopy = createCopy(cart);

    const updatedCart = cartCopy.filter(
      (product) => product.id !== productIdToDelete
    );

    setCart(updatedCart);
  };

  const resetCart = () => {
    setCart(MenuData.EMPTY);
  };

  return { cart, handleAddToCart, handleDeleteProductFromCart, resetCart };
};
