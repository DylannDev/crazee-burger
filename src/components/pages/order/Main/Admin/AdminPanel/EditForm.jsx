import { AdminContext } from "../../../../../../context/AdminContext";
import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import EditFormMessage from "./EditFormMessage";
import Form from "./Form";
import ChangesSavedMessage from "./ChangesSavedMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const {
    username,
    selectedProduct,
    setSelectedProduct,
    titleEditRef,
    handleEditProduct,
  } = useContext(AdminContext);

  const [valueOnFocus, setValueOnFocus] = useState("");
  const { isSubmitted: isSaved, showSuccessMessage } = useSuccessMessage();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, "value", value, "checked", checked);

    const productToBeUpdated = {
      ...selectedProduct,
      [name]: value,
      ["isVegetarian"]: checked,
    };

    setSelectedProduct(productToBeUpdated); // Update du formulaire
    handleEditProduct(productToBeUpdated, username); // Update de la card
  };

  const handleOnFocus = (e) => {
    const inputValueOnFocus = e.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (e) => {
    const inputValueOnBlur = e.target.value;
    if (valueOnFocus !== inputValueOnBlur) {
      showSuccessMessage();
    }
  };

  return selectedProduct === EMPTY_PRODUCT ? (
    <EditFormMessage />
  ) : (
    <Form
      product={selectedProduct}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <ChangesSavedMessage /> : <EditFormMessage />}
    </Form>
  );
}
