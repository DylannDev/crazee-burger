/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { calculateTotalToPay, formatPrice } from "../../../../../utils/maths";
import { AdminContext } from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function Total() {
  const { cart, menu } = useContext(AdminContext);
  const totalToPay = calculateTotalToPay(cart, menu);

  return (
    <TotalStyled>
      <span>Total</span>
      <span>{formatPrice(totalToPay)}</span>
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
