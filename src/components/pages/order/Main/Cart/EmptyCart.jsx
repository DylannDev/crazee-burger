import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyCart() {
  return (
    <EmptyCartStyled>
      <span>Votre panier est vide.</span>
    </EmptyCartStyled>
  );
}

const EmptyCartStyled = styled.div`
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  display: grid;
  place-content: center;
  height: 100%;
`;
