/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  variant = "normal",
  className,
  onClick,
  label,
  Icon,
}) {
  return (
    <ButtonStyled onClick={onClick} variant={variant} className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ variant }) => variantStyle[variant]}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.S};
  font-weight: ${theme.fonts.weights.bold};
  font-family: "Manrope";
  cursor: pointer;
  text-transform: uppercase;
`;

const normalStyle = css`
  background: ${theme.colors.quaternary};
  border: 1px solid ${theme.colors.quaternary};
  color: ${theme.colors.secondary};
  padding: 12px 18px;

  &:hover {
    background: ${theme.colors.tertiary};
    border: 1px solid ${theme.colors.tertiary};
    color: ${theme.colors.secondary};
  }

  &:active {
    background: ${theme.colors.tertiary};
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
  }
`;

const loginPageStyle = css`
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 18px 24px;

  &:hover {
    background: ${theme.colors.quaternary};
    border: 1px solid ${theme.colors.quaternary};
    color: ${theme.colors.secondary};
  }

  &:active {
    background: ${theme.colors.quaternary};
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
  }
`;

const variantStyle = {
  normal: normalStyle,
  loginPage: loginPageStyle,
};
