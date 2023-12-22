/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartCard from "./CartCard";
import EmptyCart from "./EmptyCart";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";

export default function CartProducts({ cart, isCartEmpty }) {
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
          />
        ))
      )}
    </CartProductsStyled>
  );
}

const CartProductsStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  border-right: 3px solid ${theme.colors.quaternary};
  border-top-right-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: ${theme.borderRadius.round};
  padding: 12px 12px 80px 12px;
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
