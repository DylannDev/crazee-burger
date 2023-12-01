/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.quaternary};
`;
