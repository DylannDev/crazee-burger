import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          imageSource={product.imageSource}
          vegetarien={product.vegetarien}
          description={product.description}
          price={product.price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 50px 50px 150px;
  width: 1350px;
`;
