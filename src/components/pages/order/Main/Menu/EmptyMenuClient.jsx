import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <div className="container">
        <h2>Victime de notre succès ! 😊</h2>
        <p>De nouvelles recettes sont en cours de préparation.</p>
        <p>À très vite ! 🍕</p>
      </div>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    padding: 30px;
    color: ${theme.colors.secondary};
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

    h2 {
      margin: 0;
    }
  }
`;
