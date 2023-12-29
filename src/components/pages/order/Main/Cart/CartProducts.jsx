/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartCard from "./CartCard";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { findObjectById } from "../../../../../utils/array";
import { checkIfProductIsClicked } from "../Menu/helper";

export default function CartProducts() {
  const {
    username,
    cart,
    isModeAdmin,
    menu,
    handleDeleteProductFromCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
    handleSelectedProduct,
    selectedProduct,
  } = useContext(AdminContext);

  const handleOnDelete = (event, id, username) => {
    event.stopPropagation();
    handleDeleteProductFromCart(id, username);
  };

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
            onDelete={(event) =>
              handleOnDelete(event, cartProduct.id, username)
            }
            isClickable={isModeAdmin}
            isSelected={checkIfProductIsClicked(
              cartProduct.id,
              selectedProduct.id
            )}
            onClick={
              isModeAdmin ? () => handleSelectedProduct(cartProduct.id) : null
            }
            incrementProduct={() =>
              incrementProductAlreadyInCart(cart, cartProduct.id, username)
            }
            decrementProduct={() =>
              decrementProductAlreadyInCart(cart, cartProduct.id, username)
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
