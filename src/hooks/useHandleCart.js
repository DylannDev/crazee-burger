import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import {
  createCopy,
  deleteProduct,
  findObjectById,
  getIndex,
} from "../utils/array";

export const useHandleCart = () => {
  const [cart, setCart] = useState(MenuData.EMPTY);

  const handleAddToCart = (productToAdd) => {
    const cartCopy = createCopy(cart);
    const isProductAlreadyInCart = findObjectById(cartCopy, productToAdd.id);

    // 1er cas : le produit est dans le cart
    if (!isProductAlreadyInCart) {
      addNewProductToCart(productToAdd, cartCopy);
      return;
    }

    // 2ème cas : le produit n'est pas dans le cart

    incrementProductAlreadyInCart(cart, productToAdd.id);
  };

  const addNewProductToCart = (productToAdd, cartCopy) => {
    const newCartProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const cartUpdated = [newCartProduct, ...cartCopy];
    setCart(cartUpdated);
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
    const updatedCart = deleteProduct(cart, productIdToDelete);
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
