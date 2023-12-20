import styled from "styled-components";
import Basket from "./Basket";
import MainRightSide from "./MainRightSide";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  height: calc(100vh - 10vh);
  background: url("/images/background-marbre.jpg");
  background-size: contain;
  display: grid;
  grid-template-columns: 25% 1fr;
  overflow-y: hidden;
`;
