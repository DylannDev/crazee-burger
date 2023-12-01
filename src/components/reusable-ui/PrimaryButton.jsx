/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ className, label, Icon }) {
  return (
    <PrimaryButtonStyled className={className}>
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
  /* padding: 18px 24px; */
  /* background: ${theme.colors.quaternary};
  border: 1px solid ${theme.colors.quaternary};
  color: ${theme.colors.secondary}; */
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.S};
  font-weight: ${theme.fonts.weights.bold};
  font-family: "Manrope";
  cursor: pointer;
  text-transform: uppercase;

  /* &:hover {
    background: ${theme.colors.tertiary};
    border: 1px solid ${theme.colors.tertiary};
    color: ${theme.colors.secondary};
  }

  &:active {
    background: ${theme.colors.tertiary};
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
  } */
`;
