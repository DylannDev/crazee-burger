/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { ImPencil } from "react-icons/im";
import { theme } from "../../../../../theme";

export default function AdminTabs({
  isCollapsed,
  setIsCollapsed,
  isAddSelected,
  setIsAddSelected,
  isEditSelected,
  setIsEditSelected,
}) {
  const selectAddTab = () => {
    setIsAddSelected(true);
    setIsEditSelected(false);
  };

  const selectEditTab = () => {
    setIsAddSelected(false);
    setIsEditSelected(true);
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <IoChevronDown /> : <IoChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {isCollapsed && (
        <>
          <Tab
            label={"Ajouter un produit"}
            Icon={<FiPlus />}
            onClick={selectAddTab}
            className={isAddSelected ? "is-active" : ""}
          />
          <Tab
            label={"Modifier un produit"}
            Icon={<ImPencil />}
            onClick={selectEditTab}
            className={isEditSelected ? "is-active" : ""}
          />
        </>
      )}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 5%;

  .is-active {
    background: ${theme.colors.quaternary};
    color: ${theme.colors.secondary};
  }
`;
