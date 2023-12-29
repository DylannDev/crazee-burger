import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";
import {
  createCopy,
  deleteProduct,
  findObjectById,
  getIndex,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useHandleCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (idProductToAdd, username) => {
    const cartCopy = createCopy(cart);
    const productAlreadyInCart = findObjectById(cart, idProductToAdd);

    if (productAlreadyInCart) {
      incrementProductAlreadyInCart(cart, idProductToAdd, username);
      return;
    }

    createNewCartProduct(idProductToAdd, cartCopy, username);
  };

  const createNewCartProduct = (idProductToAdd, cartCopy, username) => {
    const newCartProduct = { id: idProductToAdd, quantity: 1 };
    const updatedCart = [newCartProduct, ...cartCopy];
    setCart(updatedCart);
    setLocalStorage(username, updatedCart);
  };

  const incrementProductAlreadyInCart = (array, id, username) => {
    const arrayCopy = createCopy(array);
    const indexProductInCart = getIndex(arrayCopy, id);
    arrayCopy[indexProductInCart].quantity += 1;
    setCart(arrayCopy);
    setLocalStorage(username, arrayCopy);
  };

  const decrementProductAlreadyInCart = (array, id, username) => {
    const arrayCopy = createCopy(array);
    const indexOfProductInCartToDecrement = getIndex(arrayCopy, id);
    if (arrayCopy[indexOfProductInCartToDecrement].quantity === 1) {
      return handleDeleteProductFromCart(id, username);
    }
    arrayCopy[indexOfProductInCartToDecrement].quantity -= 1;
    setCart(arrayCopy);
    setLocalStorage(username, arrayCopy);
  };

  const handleDeleteProductFromCart = (productIdToDelete, username) => {
    const updatedCart = deleteProduct(cart, productIdToDelete);
    setCart(updatedCart);
    setLocalStorage(username, updatedCart);
  };

  const resetCart = (username) => {
    setCart(MenuData.EMPTY);
    setLocalStorage(username, MenuData.EMPTY);
  };

  return {
    cart,
    setCart,
    handleAddToCart,
    handleDeleteProductFromCart,
    resetCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
  };
};
