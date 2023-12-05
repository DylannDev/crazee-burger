import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { AdminContext } from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function Admin() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isAddSelected={isAddSelected}
        setIsAddSelected={setIsAddSelected}
        isEditSelected={isEditSelected}
        setIsEditSelected={setIsEditSelected}
      />
      {isCollapsed && (
        <AdminPanel
          isAddSelected={isAddSelected}
          isEditSelected={isEditSelected}
        />
      )}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
