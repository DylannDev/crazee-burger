import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyCart from "./EmptyCart";

export default function CartProducts() {
  return (
    <CartBodyStyled>
      <EmptyCart />
    </CartBodyStyled>
  );
}

const CartBodyStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  border-right: 3px solid ${theme.colors.quaternary};
  border-top-right-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: ${theme.borderRadius.round};
`;
