import { PiCheckCircleFill } from "react-icons/pi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ChangesSavedMessage() {
  return (
    <ChangesSavedMessageStyled className="success-message">
      <PiCheckCircleFill className="icon" />
      <span>Modifications enregistrées !</span>
    </ChangesSavedMessageStyled>
  );
}

const ChangesSavedMessageStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${theme.fonts.size.S};
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  color: ${theme.colors.secondary};

  .icon {
    font-size: ${theme.fonts.size.P0};
  }
`;
