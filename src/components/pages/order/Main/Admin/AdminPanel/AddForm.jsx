import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { nanoid } from "nanoid";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  const { isSubmitted, handleAddProduct } = useContext(AdminContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: nanoid(8),
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
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
