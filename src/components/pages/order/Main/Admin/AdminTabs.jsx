/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { theme } from "../../../../../theme";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <IoChevronDown /> : <IoChevronUp />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 5%;

  .is-active {
    background: ${theme.colors.quaternary};
    color: ${theme.colors.secondary};
  }
`;
