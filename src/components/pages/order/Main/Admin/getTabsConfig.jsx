import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { ImPencil } from "react-icons/im";

export const getTabsConfig = (
  currentTabSelected,
  isCollapsed,
  setIsCollapsed
) => [
  {
    tabId: "chevron",
    label: "",
    Icon: isCollapsed ? <IoChevronDown /> : <IoChevronUp />,
    onClick: () => setIsCollapsed(!isCollapsed),
    className: isCollapsed ? "is-active" : "",
  },
  {
    tabId: "add",
    label: "Ajouter un produit",
    Icon: <FiPlus />,
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    tabId: "edit",
    label: "Modifier un produit",
    Icon: <ImPencil />,
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
];
