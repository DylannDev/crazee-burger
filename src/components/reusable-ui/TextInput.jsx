/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  className,
  onChange,
  value,
  Icon,
  type,
  ...extraProps
}) {
  return (
    <InputStyled>
      <div className="icon">{Icon && Icon}</div>
      <input
        className={className}
        onChange={onChange}
        value={value}
        type={type}
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  position: relative;
  /* gap: ${theme.spacing.sm}; */
  /* background: ${theme.colors.white}; */
  /* margin: 18px 0; */

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
    /* padding: 18px 45px; */
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
