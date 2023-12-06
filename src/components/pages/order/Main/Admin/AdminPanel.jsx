/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanel({ currentTabSelected }) {
  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminPanelStyled>
      {tabs.map((tab) => currentTabSelected === tab.tabId && tab.label)}
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
