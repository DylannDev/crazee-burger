/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Button";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function Footer({ isCartEmpty }) {
  const { username, resetCart } = useContext(AdminContext);
  return (
    <FooterStyled>
      {!isCartEmpty && (
        <Button
          label="Vider mon panier"
          onClick={() => resetCart(username)}
          className="button-color"
        />
      )}
      <span>Codé par Dylann Xavero avec ❤️</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  height: 120px;
  background-color: ${theme.colors.white};
  border-top: 3px solid ${theme.colors.quaternary};
  border-top-right-radius: ${theme.borderRadius.round};
  display: grid;
  place-content: center;
  gap: 15px;
  font-size: ${theme.fonts.size.S};
`;
