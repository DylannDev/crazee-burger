import styled from "styled-components";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { nanoid } from "nanoid";

export default function AddForm() {
  const { handleAddProduct } = useContext(AdminContext);

  const [newProduct, setNewProduct] = useState({
    imageSource: "",
    title: "",
    price: 0,
  });

  // const [description, setDescription] = useState("");
  // const [vegetarien, setVegetarien] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: nanoid(8),
    };

    handleAddProduct(newProductToAdd);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image preview</div>
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
    background: red;
    grid-area: 1 / 1 / 4 / 2;
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
