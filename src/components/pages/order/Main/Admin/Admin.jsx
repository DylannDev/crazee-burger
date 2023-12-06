import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { AdminContext } from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function Admin() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        currentTabSelected={currentTabSelected}
        setCurrentTabSelected={setCurrentTabSelected}
      />
      {isCollapsed && <AdminPanel currentTabSelected={currentTabSelected} />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
