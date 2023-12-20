import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">head</div>
      <div className="body">body</div>
      <div className="footer">footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: green;

  .head {
    background-color: red;
  }
  .body {
    background-color: blue;
  }
  .footer {
    background-color: pink;
  }
`;
