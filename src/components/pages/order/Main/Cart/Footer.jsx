import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return <FooterStyled>Codé par Dylann Xavero avec ❤️</FooterStyled>;
}

const FooterStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.quaternary};
  display: grid;
  place-content: center;
  font-size: ${theme.fonts.size.S};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
