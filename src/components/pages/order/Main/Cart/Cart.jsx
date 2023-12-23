import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import CartProducts from "./CartProducts";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cart, isModeAdmin } = useContext(AdminContext);

  const isCartEmpty = cart.length === 0;

  const totalToPay = cart.reduce((total, cartProduct) => {
    const totalForOneProduct = cartProduct.price * cartProduct.quantity;
    return total + totalForOneProduct;
  }, 0);

  return (
    <CartStyled>
      <Total amountToPay={formatPrice(totalToPay)} />
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <CartProducts cart={cart} isModeAdmin={isModeAdmin} />
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
