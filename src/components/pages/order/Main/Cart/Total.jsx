/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Total({ amountToPay }) {
  return (
    <TotalStyled>
      <span>Total</span>
      <span>{amountToPay}</span>
    </TotalStyled>
  );
}

const TotalStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.quaternary};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fonts.size.P1};
  font-weight: ${theme.fonts.weights.medium};
`;
