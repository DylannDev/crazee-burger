import { FiPlus } from "react-icons/fi";
import { ImPencil } from "react-icons/im";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";

export const tabsConfig = [
  {
    tabId: "add",
    label: "Ajouter un produit",
    Icon: <FiPlus />,
    Content: <AddForm />,
  },
  {
    tabId: "edit",
    label: "Modifier un produit",
    Icon: <ImPencil />,
    Content: <EditForm />,
  },
];
