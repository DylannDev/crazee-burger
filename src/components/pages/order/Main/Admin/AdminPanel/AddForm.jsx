import styled from "styled-components";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { nanoid } from "nanoid";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import TextareaDescription from "./TextareaDescription";
import Checkbox from "./Checkbox";
import { getInputTextsConfig } from "./getInputTextsConfig";
const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: "",
  description: "",
  vegetarien: false,
};

export default function AddForm() {
  const { handleAddProduct, isSubmitted } = useContext(AdminContext);

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
    setNewProduct({ ...newProduct, [name]: value, ["vegetarien"]: checked });
  };

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput key={input.id} {...input} onChange={handleChange} />
        ))}
        <TextareaDescription
          value={newProduct.description}
          onChange={handleChange}
        />
        <Checkbox vegetarien={newProduct.vegetarien} onChange={handleChange} />
      </div>
      <div className="submit">
        <Button label="Ajouter le nouveau produit" className="submit-btn" />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}
const AddFormStyled = styled.form`
  width: 70%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr) 2fr repeat(2, 1fr);

  .input-fields {
    grid-area: 1 / 2 / 6 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) 2fr 1fr;
    gap: 10px;
  }
  .submit {
    display: flex;
    align-items: center;
    grid-area: 6 / -2 / -2 / -1;

    .submit-btn {
      width: 50%;
    }
  }
`;
