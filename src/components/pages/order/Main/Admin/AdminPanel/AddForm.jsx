import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { nanoid } from "nanoid";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(AdminContext);

  const { isSubmitted, showSuccessMessage } = useSuccessMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: nanoid(8),
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    showSuccessMessage();
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setNewProduct({ ...newProduct, [name]: value, ["isVegetarian"]: checked });
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
