import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((product) => (
        <div key={product.id} className="product">
          <div>
            <div className="image">
              <img src={product.imageSource} alt={product.title} />
            </div>
            <div>{product.title}</div>
            <div>
              <div>{product.price}</div>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .product {
    background: blue;
    width: 240px;
    height: 330px;

    img {
      width: 100px;
    }
  }
`;
