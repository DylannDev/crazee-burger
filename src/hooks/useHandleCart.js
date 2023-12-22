import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import { createCopy, findInArray, getIndex } from "../utils/array";

export const useHandleCart = () => {
  const [cart, setCart] = useState(MenuData.EMPTY);

  const handleAddToCart = (productToAdd) => {
    const cartCopy = createCopy(cart);
    const isProductAlreadyInCart = findInArray(cartCopy, productToAdd.id);

    // 1er cas : le produit est dans le cart
    if (!isProductAlreadyInCart) {
      const newCartProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const cartUpdated = [newCartProduct, ...cartCopy];

      setCart(cartUpdated);
      return;
    }

    // 2ème cas : le produit n'est pas dans le cart

    incrementProductAlreadyInCart(cart, productToAdd.id);
  };

  const incrementProductAlreadyInCart = (array, id) => {
    const arrayCopy = createCopy(array);
    const indexProductInCard = getIndex(arrayCopy, id);
    arrayCopy[indexProductInCard].quantity += 1;
    setCart(arrayCopy);
  };

  const decrementProductAlreadyInCart = (array, id) => {
    const arrayCopy = createCopy(array);
    const indexOfProductInCartToDecrement = getIndex(arrayCopy, id);
    if (arrayCopy[indexOfProductInCartToDecrement].quantity === 1) {
      return handleDeleteProductFromCart(id);
    }
    arrayCopy[indexOfProductInCartToDecrement].quantity -= 1;
    setCart(arrayCopy);
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

  return {
    cart,
    handleAddToCart,
    handleDeleteProductFromCart,
    resetCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
  };
};
