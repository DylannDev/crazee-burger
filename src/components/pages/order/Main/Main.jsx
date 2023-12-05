import styled from "styled-components";
// import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <Admin />
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
