import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

const AdminStyled = styled.div`
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.quaternary};
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);

  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
