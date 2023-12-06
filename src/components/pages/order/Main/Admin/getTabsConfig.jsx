import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { ImPencil } from "react-icons/im";

export const getTabsConfig = (currentTabSelected, isCollapsed) => [
  {
    tabId: "chevron",
    label: "",
    Icon: isCollapsed ? <IoChevronDown /> : <IoChevronUp />,
  },
  {
    tabId: "add",
    label: "Ajouter un produit",
    Icon: <FiPlus />,
  },
  {
    tabId: "edit",
    label: "Modifier un produit",
    Icon: <ImPencil />,
  },
];
