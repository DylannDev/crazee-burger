/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function TextareaDescription({
  value,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <TextareaDescriptionStyled
      name="description"
      value={value}
      checked={false}
      placeholder="Entrez les ingrédients de la pizza"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

const TextareaDescriptionStyled = styled.textarea`
  background-color: ${theme.colors.background_white};
  border: none;
  border-radius: ${theme.borderRadius.round};
  padding-left: 10px;
  padding-top: 5px;
  font-family: "Manrope";
  color: #17161a;

  &:focus {
    outline: 2px solid ${theme.colors.quaternary};
  }

  &::placeholder {
    font-family: "Manrope";
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.S};
    font-weight: ${theme.fonts.weights.regular};
  }
`;
