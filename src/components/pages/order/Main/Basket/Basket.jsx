import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import Footer from "./Footer";

export default function Basket() {
  return (
    <BasketStyled>
      <Header />
      <div className="body">
        <span>Votre panier est vide.</span>
      </div>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.secondary};

  .body {
    flex: 1;
    background-color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    display: grid;
    place-content: center;
  }
`;
