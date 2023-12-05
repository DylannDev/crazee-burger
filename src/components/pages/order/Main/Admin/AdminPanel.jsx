/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel({ isAddSelected, isEditSelected }) {
  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  /* border-top: 1px solid ${theme.colors.quaternary}; */
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
`;
