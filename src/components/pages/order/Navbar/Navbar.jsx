/* eslint-disable react/prop-types */
import Logo from "../../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/windows";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo
        src={"/images/logo-inline-crusty-pizza-jaune-pale.png"}
        className="logo-order-page"
        onClick={() => refreshPage()}
      />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.secondary};
  padding: 0px 70px 0px 20px;
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    width: 300px;
    margin: 20px 0;
    cursor: pointer;
  }
`;
