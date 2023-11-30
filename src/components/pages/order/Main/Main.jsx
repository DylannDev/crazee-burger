import styled from "styled-components";
import Menu from "./Menu";
// import Basket from "./Basket";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  flex: 1;
  background: url("/images/background-marbre.jpg");
  background-size: contain;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  overflow-y: scroll;
`;
