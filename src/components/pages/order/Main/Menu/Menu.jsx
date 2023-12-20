import styled from "styled-components";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import Card from "./Card";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { useHandleMenu } from "../../../../../hooks/useHandleMenu";
const IMAGE_BY_DEFAULT = "/images/coming-soon.svg";

export default function Menu() {
  const {
    isModeAdmin,
    selectedProduct,
    setSelectedProduct,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    menu,
    handleDeleteProduct,
    resetMenu,
  } = useContext(AdminContext);
<<<<<<< HEAD
=======
  const { menu, handleDeleteProduct, resetMenu } = useHandleMenu();
>>>>>>> 10885c746346ed78968a3852f325cfed70438ffa

  // comportements
  const handleClickOnProduct = async (idCardClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idCardClicked
    );
    await setSelectedProduct(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();

    handleDeleteProduct(idProductToDelete);

    idProductToDelete === selectedProduct.id &&
      setSelectedProduct(EMPTY_PRODUCT);

    titleEditRef.current.focus();
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
            onClick={() => handleClickOnProduct(id)}
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
`;
