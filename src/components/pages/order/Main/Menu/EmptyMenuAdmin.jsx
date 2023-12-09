/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({ OnReset }) {
  return (
    <EmptyMenuAdminStyled>
      <div className="container">
        <h2>Le menu est vide?</h2>
        <p>Cliquez sur le bouton ci-dessous pour le réinitialiser</p>
        <Button onClick={OnReset} label="Recharger les produits" />
      </div>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
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
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

    h2 {
      margin: 0;
    }
  }
`;
