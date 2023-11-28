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
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: ${theme.colors.greyBlue};
    width: 15px;
  }

  input {
    color: ${theme.colors.dark};
    border: none;
    width: 100%;
    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.regular};
      line-height: 17px;
    }
  }
`;
