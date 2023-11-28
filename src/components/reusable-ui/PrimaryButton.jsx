/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 24px;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P0};
  font-style: normal;
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
