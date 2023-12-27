import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled className="text-container">
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  width: 100%;

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    margin: 0;
  }
`;
