import styled from "styled-components";
import { theme } from "../../../../../../theme";

/* eslint-disable react/prop-types */
export default function Checkbox({ isVegetarian, onChange }) {
  return (
    <CheckboxStyled>
      <input
        name="isVegetarian"
        checked={isVegetarian}
        value={isVegetarian}
        type="checkbox"
        onChange={onChange}
        id="isVegetarian"
      />
      <label htmlFor="isVegetarian">Vegetarien ?</label>
    </CheckboxStyled>
  );
}

const CheckboxStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    accent-color: ${theme.colors.quaternary};
  }

  label {
    font-size: ${theme.fonts.size.S};
    padding-left: 5px;
  }
`;
