/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  variant = "normal",
  onChange,
  value,
  Icon,
  type,
  ...extraProps
}) {
  return (
    <InputStyled variant={variant}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} value={value} type={type} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  ${({ variant }) => variantStyle[variant]}

  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P1};
    left: 10px;
    position: absolute;
  }

  input {
    color: ${theme.colors.dark};
    font-family: "Manrope";
    border: none;
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-family: "Manrope";
      font-size: ${theme.fonts.size.S};
      font-weight: ${theme.fonts.weights.regular};
      line-height: 17px;
    }
  }
  input:focus {
    outline: 2px solid ${theme.colors.quaternary};
  }
`;

const normalStyle = css`
  input {
    height: 100%;
    background-color: ${theme.colors.background_white};
    padding: 10px 35px;
  }
`;

const largeStyle = css`
  input {
    background: ${theme.colors.white};
    padding: 18px 45px;
  }
`;

const variantStyle = {
  normal: normalStyle,
  large: largeStyle,
};
