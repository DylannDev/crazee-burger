import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { AdminContextProvider } from "../../../context/AdminContext";

export default function OrderPage() {
  return (
    <AdminContextProvider>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </AdminContextProvider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
  }
`;
