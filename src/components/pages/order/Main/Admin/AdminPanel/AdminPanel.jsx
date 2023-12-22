/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { tabsConfig } from "../tabsConfig";

export default function AdminPanel({ currentTabSelected }) {
  return (
    <AdminPanelStyled>
      {tabsConfig.map(
        (tab) =>
          currentTabSelected === tab.tabId && (
            <div key={tab.tabId} className="container">
              {tab.Content}
            </div>
          )
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  border-top: 3px solid ${theme.colors.quaternary};
  background-color: ${theme.colors.white};
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);

  .container {
    height: 350px;
    padding: 30px 5%;
  }
`;
