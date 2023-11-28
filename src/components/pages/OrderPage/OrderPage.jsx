import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <main></main>
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

    main {
      flex: 1;
      background: ${theme.colors.background_white};
      border-radius: 0px 0px ${theme.borderRadius.extraRound}
        ${theme.borderRadius.extraRound};
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    }
  }
`;
