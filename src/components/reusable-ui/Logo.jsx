/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, src, onClick }) {
  return (
    <LogoStyled onClick={onClick}>
      <img src={src} className={className} alt="logo crusty pizza" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    object-position: center;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
