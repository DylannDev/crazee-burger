/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { ImPencil } from "react-icons/im";
import { theme } from "../../../../../theme";
import { nanoid } from "nanoid";

export default function AdminTabs({
  isCollapsed,
  setIsCollapsed,
  isAddSelected,
  setIsAddSelected,
  isEditSelected,
  setIsEditSelected,
}) {
  const selectTab = (tabSelected) => {
    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsAddSelected(false);
      setIsEditSelected(true);
    }
  };

  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <IoChevronDown /> : <IoChevronUp />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <FiPlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <ImPencil />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab, index) =>
        index < 1 ? (
          <Tab
            key={nanoid(8)}
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        ) : (
          isCollapsed && (
            <Tab
              key={nanoid(8)}
              label={tab.label}
              Icon={tab.Icon}
              onClick={tab.onClick}
              className={tab.className}
            />
          )
        )
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
