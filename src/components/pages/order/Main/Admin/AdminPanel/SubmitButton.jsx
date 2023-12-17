/* eslint-disable react/prop-types */
import Button from "../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button label="Ajouter le nouveau produit" className="submit-btn" />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
