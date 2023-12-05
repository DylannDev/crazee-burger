import styled from "styled-components";
import Menu from "./Menu";
// import Basket from "./Basket";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
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

    .admin {
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
