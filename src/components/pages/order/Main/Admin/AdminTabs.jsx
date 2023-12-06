/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { theme } from "../../../../../theme";
import { nanoid } from "nanoid";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs({
  isCollapsed,
  setIsCollapsed,
  currentTabSelected,
  setCurrentTabSelected,
}) {
  const selectTab = (tabSelected) => {
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected, isCollapsed, setIsCollapsed);

  return (
    <AdminTabsStyled>
      {tabs.map((tab, index) =>
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
              onClick={() => selectTab(tab.tabId)}
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
    box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;
