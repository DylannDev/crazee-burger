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
  background-color: ${theme.colors.white};
  border-top-right-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  display: grid;
  place-content: center;
  height: 100%;
`;
