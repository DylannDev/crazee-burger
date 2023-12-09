import { PiCheckCircleFill } from "react-icons/pi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className="success-message">
      <PiCheckCircleFill className="icon" />
      <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${theme.fonts.size.S};
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  margin-left: 20px;
  color: ${theme.colors.secondary};

  .icon {
    font-size: ${theme.fonts.size.P0};
  }
`;
