import styled from "styled-components";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import Card from "../Card";
import { checkIfProductIsClicked } from "./helper";
const IMAGE_BY_DEFAULT = "/images/coming-soon.svg";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDeleteProduct,
    resetMenu,
    selectedProduct,
    setSelectedProduct,
    setIsCollapsed,
    setCurrentTabSelected,
  } = useContext(AdminContext);
  //states

  // comportements
  const handleSelectProduct = (idCardClicked) => {
    if (!isModeAdmin) return;

    setIsCollapsed(true);
    setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idCardClicked
    );
    setSelectedProduct(productClickedOn);
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDeleteProduct(idProductToDelete);
  };

  // affichage
  if (menu.length === 0) {
    return isModeAdmin ? (
      <EmptyMenuAdmin OnReset={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <MenuStyled>
      {menu.map(
        ({ id, title, imageSource, isVegetarian, description, price }) => (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            isVegetarian={isVegetarian}
            description={description}
            price={price}
            showDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleSelectProduct(id)}
            isHoverabaleAdmin={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
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
