import styled from "styled-components";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";

export default function AddForm() {
  const { handleAddProduct } = useContext(AdminContext);

  const newProduct = {
    id: new Date().getTime(),
    imageSource: "/images/texane-barbecue.jpg",
    title: "Jambon Champignons",
    price: 14.898,
    description: "Sauce tomate, Jambon, Champignons, Oignons rouges",
    vegetarien: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
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
