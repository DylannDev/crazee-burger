import { AdminContext } from "../../../../../../context/AdminContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import TextareaDescription from "./TextareaDescription";
import Checkbox from "./Checkbox";
import { getInputTextsConfig } from "./getInputTextsConfig";
import { useContext } from "react";

export default function EditForm() {
  const { selectedProduct, setSelectedProduct, handleEditProduct } =
    useContext(AdminContext);

  const inputTexts = getInputTextsConfig(selectedProduct);

  const handleChangeInputsEditForm = (e) => {
    const { name, value, checked } = e.target;

    const productToBeUpdated = {
      ...selectedProduct,
      [name]: value,
      ["vegetarien"]: checked,
    };

    setSelectedProduct(productToBeUpdated); // Update du formulaire
    handleEditProduct(productToBeUpdated); // Update de la card
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={selectedProduct.imageSource}
        title={selectedProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChangeInputsEditForm}
          />
        ))}
        <TextareaDescription
          value={selectedProduct.description}
          onChange={handleChangeInputsEditForm}
        />
        <Checkbox
          vegetarien={selectedProduct.vegetarien}
          onChange={handleChangeInputsEditForm}
        />
      </div>
      {/* <div className="submit">
        <Button label="Ajouter le nouveau produit" className="submit-btn" />
        {isSubmitted && <SubmitMessage />}
      </div> */}
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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
