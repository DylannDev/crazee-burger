/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked={"Activer le mode admin"}
        labelIfChecked={"Désactiver le mode admin"}
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: ${theme.colors.quaternary};
`;
