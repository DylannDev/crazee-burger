import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Header amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.quaternary};
`;
