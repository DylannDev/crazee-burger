import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">
        <span>Total</span>
        <span>0,00€</span>
      </div>
      <div className="body">
        <span>Votre panier est vide.</span>
      </div>
      <div className="footer">Codé par Dylann Xavero avec ❤️</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.secondary};

  .head {
    height: 70px;
    background-color: ${theme.colors.quaternary};
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.fonts.size.P1};
    font-weight: ${theme.fonts.weights.medium};
  }
  .body {
    flex: 1;
    background-color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    display: grid;
    place-content: center;
  }
  .footer {
    height: 70px;
    background-color: ${theme.colors.quaternary};
    display: grid;
    place-content: center;
    font-size: ${theme.fonts.size.S};
  }
`;
