import styled from "styled-components";
import Menu from "./Menu/Menu";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import Admin from "./Admin/Admin";

export default function MainRightSide() {
  const { isModeAdmin } = useContext(AdminContext);
  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainRightSideStyled>
  );
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
`;
