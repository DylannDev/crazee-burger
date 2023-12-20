import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span>Votre panier est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  display: grid;
  place-content: center;
`;
