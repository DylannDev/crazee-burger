import styled from "styled-components";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { nanoid } from "nanoid";
import TextInput from "../../../../../reusable-ui/TextInput";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { PiCameraFill, PiPizzaFill, PiCheckCircleFill } from "react-icons/pi";
import { MdEuroSymbol } from "react-icons/md";
const EMPTY_PRODUCT = {
  imageSource: "",
  title: "",
  price: 0,
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

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="image d'une pizza" />
        ) : (
          "Aucune Image"
        )}
      </div>
      <div className="input-fields">
        <TextInput
          className="input"
          Icon={<PiCameraFill />}
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL de l'image"
          onChange={handleChange}
        />
        <TextInput
          className="input"
          Icon={<PiPizzaFill />}
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Pizza Texane)"
          onChange={handleChange}
        />
        <TextInput
          className="input"
          Icon={<MdEuroSymbol />}
          name="price"
          value={newProduct.price}
          type="number"
          placeholder="Prix"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={newProduct.description}
          placeholder="Entrez les ingrédients de la pizza"
          onChange={handleChange}
        />
        <div className="checkbox">
          <input
            name="vegetarien"
            checked={newProduct.vegetarien}
            value={newProduct.vegetarien}
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="vegetarien">Vegetarien</label>
        </div>
      </div>
      <div className="submit">
        <PrimaryButton
          label="Ajouter le nouveau produit"
          className="submit-btn"
        />
        {isSubmitted && (
          <div className="success-message">
            <PiCheckCircleFill className="icon" />
            <span>Ajouté avec succès !</span>
          </div>
        )}
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

  .image-preview {
    border: 2px solid ${theme.colors.quaternary};
    border-radius: ${theme.borderRadius.round};
    margin-right: 10px;
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .input-fields {
    grid-area: 1 / 2 / 6 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) 2fr 1fr;
    gap: 10px;

    .input {
      height: 100%;
      background-color: ${theme.colors.background_white};
      padding: 10px 35px;

      &::placeholder {
        /* padding-left: 20px; */
      }
    }

    textarea {
      background-color: ${theme.colors.background_white};
      border: none;
      border-radius: ${theme.borderRadius.round};
      padding-left: 10px;
      padding-top: 5px;
      font-family: "Manrope";
      color: #17161a;

      &:focus {
        outline: 2px solid ${theme.colors.quaternary};
      }

      &::placeholder {
        font-family: "Manrope";
        color: ${theme.colors.greyMedium};
        font-size: ${theme.fonts.size.S};
        font-weight: ${theme.fonts.weights.regular};
      }
    }

    .checkbox {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      input {
        accent-color: ${theme.colors.quaternary};
      }

      label {
        font-size: ${theme.fonts.size.S};
        padding-left: 5px;
      }
    }
  }
  .submit {
    display: flex;
    align-items: center;
    grid-area: 6 / -2 / -2 / -1;

    .submit-btn {
      width: 50%;
    }

    .success-message {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: ${theme.fonts.size.S};
      font-weight: ${theme.fonts.weights.bold};
      text-transform: uppercase;
      margin-left: 20px;
      color: ${theme.colors.secondary};

      .icon {
        font-size: ${theme.fonts.size.P0};
      }
    }
  }
`;
