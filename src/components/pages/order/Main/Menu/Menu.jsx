import styled from "styled-components";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import Card from "./Card";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../../../enums/product";

export default function Menu() {
  const {
    isModeAdmin,
    selectedProduct,
    setSelectedProduct,
    handleSelectedProduct,
    titleEditRef,
    menu,
    handleDeleteProduct,
    resetMenu,
    handleAddToCart,
    handleDeleteProductFromCart,
  } = useContext(AdminContext);

  // comportements
  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();

    handleDeleteProduct(idProductToDelete);
    handleDeleteProductFromCart(idProductToDelete);

    idProductToDelete === selectedProduct.id &&
      setSelectedProduct(EMPTY_PRODUCT);

    titleEditRef.current.focus();
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToCart(idProductToAdd);
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
            onClick={isModeAdmin ? () => handleSelectedProduct(id) : null}
            isHoverabaleAdmin={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
            onAdd={(event) => handleAddButton(event, id)}
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
`;
