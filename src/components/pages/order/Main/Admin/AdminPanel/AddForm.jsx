import styled from "styled-components";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { nanoid } from "nanoid";
const EMPTY_PRODUCT = {
  imageSource: "",
  title: "",
  price: 0,
};

export default function AddForm() {
  const { handleAddProduct } = useContext(AdminContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // const [description, setDescription] = useState("");
  // const [vegetarien, setVegetarien] = useState(false);

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
    const { name, value } = e.target;

    setNewProduct({ ...newProduct, [name]: value });
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
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </div>
      <button className="submit-btn">Submit button</button>
    </AddFormStyled>
  );
}
const AddFormStyled = styled.form`
  border: 2px solid black;
  width: 70%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  .submit-btn {
    background: pink;
    grid-area: 4 / -2 / -1 / -1;

    width: 50%;
  }
`;
