import styled from "styled-components";
// import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext);
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  height: calc(100vh - 10vh);
  background: url("/images/background-marbre.jpg");
  background-size: contain;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: hidden;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
