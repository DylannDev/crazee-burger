import styled from "styled-components";
import Product from "./Product";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
const IMAGE_BY_DEFAULT = "/images/coming-soon.svg";

export default function Menu() {
  const { menu, isModeAdmin } = useContext(AdminContext);
  return (
    <MenuStyled>
      {menu.map(
        ({ id, title, imageSource, vegetarien, description, price }) => (
          <Product
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            vegetarien={vegetarien}
            description={description}
            price={price}
            showDeleteButton={isModeAdmin}
          />
        )
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 280px));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 50px 50px 150px;
  justify-content: center;
  overflow-y: scroll;
  /* width: 1350px; */
`;
