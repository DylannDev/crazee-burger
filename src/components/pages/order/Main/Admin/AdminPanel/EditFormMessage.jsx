import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme";

export default function EditFormMessage() {
  return (
    <EditFormMessageStyled>
      Cliquer sur un produit pour le modifier <HiCursorClick className="icon" />
    </EditFormMessageStyled>
  );
}

const EditFormMessageStyled = styled.p`
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
