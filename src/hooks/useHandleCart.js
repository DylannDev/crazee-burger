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

  const handleAddToCart = (idProductToAdd) => {
    const cartCopy = createCopy(cart);
    const productAlreadyInCart = findObjectById(cart, idProductToAdd);

    if (productAlreadyInCart) {
      incrementProductAlreadyInCart(cart, idProductToAdd);
      return;
    }

    createNewCartProduct(idProductToAdd, cartCopy);
  };

  const createNewCartProduct = (idProductToAdd, cartCopy) => {
    const newCartProduct = { id: idProductToAdd, quantity: 1 };
    const updatedCart = [newCartProduct, ...cartCopy];

    setCart(updatedCart);
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
