/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ onChange, value, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} {...extraProps} type="text" />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  margin: 18px 0;
  position: relative;

  .icon {
    color: ${theme.colors.greyBlue};
    width: 15px;
    left: 15px;
    position: absolute;
  }

  input {
    color: ${theme.colors.dark};
    font-family: "Manrope";
    border: none;
    width: 100%;
    padding: 18px 45px;
    border-radius: ${theme.borderRadius.round};
    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-family: "Manrope";
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.regular};
      line-height: 17px;
    }
  }
  input:focus {
    outline: 2px solid ${theme.colors.quaternary};
  }
`;
