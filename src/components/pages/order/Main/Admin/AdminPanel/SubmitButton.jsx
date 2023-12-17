/* eslint-disable react/prop-types */
import Button from "../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import styled from "styled-components";

export default function SubmitButton({ isSubmitted }) {
  return (
    <SubmitButtonStyled>
      <Button label="Ajouter le nouveau produit" className="submit-btn" />
      {isSubmitted && <SubmitMessage />}
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.div`
  width: 100%;
  display: flex;

  .submit-btn {
    width: 50%;
  }
`;
