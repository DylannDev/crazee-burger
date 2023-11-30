import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;