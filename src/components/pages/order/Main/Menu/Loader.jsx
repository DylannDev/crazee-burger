import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Loader() {
  return (
    <LoaderStyled>
      <span>Chargement du menu...</span>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  display: grid;
  place-content: center;

  span {
    text-transform: uppercase;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.bold};
    padding: 30px;
    color: ${theme.colors.secondary};
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
  }
`;
