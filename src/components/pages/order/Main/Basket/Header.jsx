/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Header({ amountToPay }) {
  return (
    <HeaderStyled>
      <span>Total</span>
      <span>{amountToPay}</span>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.quaternary};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fonts.size.P1};
  font-weight: ${theme.fonts.weights.medium};
`;
