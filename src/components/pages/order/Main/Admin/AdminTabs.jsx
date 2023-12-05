import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<IoChevronDown />} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 5%;
`;
