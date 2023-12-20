import { AdminContext } from "../../../../../../context/AdminContext";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import EditFormMessage from "./EditFormMessage";
import Form from "./Form";
import { useHandleMenu } from "../../../../../../hooks/useHandleMenu";

export default function EditForm() {
  const { selectedProduct, setSelectedProduct, titleEditRef } =
    useContext(AdminContext);

  const { handleEditProduct } = useHandleMenu();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    // console.log(selectedProduct);
    const productToBeUpdated = {
      ...selectedProduct,
      [name]: value,
      ["isVegetarian"]: checked,
    };

    setSelectedProduct(productToBeUpdated); // Update du formulaire
    handleEditProduct(productToBeUpdated); // Update de la card
  };

  return selectedProduct === EMPTY_PRODUCT ? (
    <EditFormMessage />
  ) : (
    <Form product={selectedProduct} onChange={handleChange} ref={titleEditRef}>
      <EditFormMessage />
    </Form>
  );
}
