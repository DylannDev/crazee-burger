import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import EditFormMessage from "./EditFormMessage";

export default function EditForm() {
  const { selectedProduct } = useContext(AdminContext);
  return <EditFormMessage />;
}
