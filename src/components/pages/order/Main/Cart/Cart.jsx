import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import CartProducts from "./CartProducts";
import Footer from "./Footer";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cart, menu } = useContext(AdminContext);

  const isCartEmpty = cart.length === 0;

  return (
    <CartStyled>
      <Total />
      {isCartEmpty ? (
        <EmptyCart isLoading={menu === undefined} />
      ) : (
        <CartProducts />
      )}
      <Footer isCartEmpty={isCartEmpty} />
    </CartStyled>
  );
}

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.quaternary};
  border-right: 3px solid ${theme.colors.quaternary};
  position: relative;
  overflow: hidden;
`;
