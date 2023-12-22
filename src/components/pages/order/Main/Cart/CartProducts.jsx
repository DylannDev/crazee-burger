/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartCard from "./CartCard";
import EmptyCart from "./EmptyCart";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function CartProducts({ cart, isCartEmpty }) {
  const {
    handleDeleteProductFromCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
  } = useContext(AdminContext);

  return (
    <CartProductsStyled>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        cart.map((cartProduct) => (
          <CartCard
            key={cartProduct.id}
            {...cartProduct}
            imageSource={
              cartProduct.imageSource
                ? cartProduct.imageSource
                : IMAGE_BY_DEFAULT
            }
            onDelete={() => handleDeleteProductFromCart(cartProduct.id)}
            incrementProduct={() =>
              incrementProductAlreadyInCart(cart, cartProduct.id)
            }
            decrementProduct={() =>
              decrementProductAlreadyInCart(cart, cartProduct.id)
            }
          />
        ))
      )}
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
