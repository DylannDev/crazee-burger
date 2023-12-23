/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartCard from "./CartCard";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { findObjectById } from "../../../../../utils/array";

export default function CartProducts() {
  const {
    cart,
    isModeAdmin,
    menu,
    handleDeleteProductFromCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
  } = useContext(AdminContext);

  return (
    <CartProductsStyled>
      {cart.map((cartProduct) => {
        const menuProduct = findObjectById(menu, cartProduct.id);
        return (
          <CartCard
            key={cartProduct.id}
            {...menuProduct}
            quantity={cartProduct.quantity}
            imageSource={
              menuProduct.imageSource
                ? menuProduct.imageSource
                : IMAGE_BY_DEFAULT
            }
            onDelete={() => handleDeleteProductFromCart(cartProduct.id)}
            isClickable={isModeAdmin}
            incrementProduct={() =>
              incrementProductAlreadyInCart(cart, cartProduct.id)
            }
            decrementProduct={() =>
              decrementProductAlreadyInCart(cart, cartProduct.id)
            }
          />
        );
      })}
    </CartProductsStyled>
  );
}

const CartProductsStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  border-top-right-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: ${theme.borderRadius.round};
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
