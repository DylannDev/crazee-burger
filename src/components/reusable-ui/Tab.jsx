/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ label, className, onClick, Icon }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      {label && label}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  display: flex;
  gap: 5px;
  height: 40px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // fonts
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-family: "Manrope";
  font-size: ${theme.fonts.size.S};
  font-weight: ${theme.fonts.weights.bold};
  background: ${theme.colors.secondary};

  // borders
  border: none;
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  // shadow
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);

  .icon {
    display: flex;
    font-size: ${theme.fonts.size.P0};
  }
`;
