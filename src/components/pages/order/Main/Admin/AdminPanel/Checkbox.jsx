import styled from "styled-components";
import { theme } from "../../../../../../theme";

/* eslint-disable react/prop-types */
export default function Checkbox({ vegetarien, onChange }) {
  return (
    <CheckboxStyled>
      <input
        name="vegetarien"
        checked={vegetarien}
        value={vegetarien}
        type="checkbox"
        onChange={onChange}
        id="vegetarien"
      />
      <label htmlFor="vegetarien">Vegetarien</label>
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
