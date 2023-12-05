/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon }) {
  return (
    <TabStyled>
      <div className="icon">{Icon}</div>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 40px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // fonts
  font-size: ${theme.fonts.size.P0};
  background: ${theme.colors.quaternary};

  // borders
  /* border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: ${theme.colors.secondary}; */
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
  }
`;
