import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { PiCarrot } from "react-icons/pi";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((product) => (
        <div key={product.id} className="product">
          <div className="image">
            <img src={product.imageSource} alt={product.title} />
          </div>
          <div className="card-bottom">
            <div className="product-title">
              <span>{product.title}</span>
              {product.vegetarien && (
                <span className="vegetarien">
                  <PiCarrot className="icon" />
                </span>
              )}
            </div>
            <div className="description-cta">
              <div className="description">{product.description}</div>
              <div className="price-button">
                <div className="price">{product.price} €</div>
                <PrimaryButton className="button-menu-page" label={"Ajouter"} />
              </div>
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
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 50px 50px 150px;
  width: 1350px;

  .product {
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.round};
    width: auto;
    min-width: 240px;
    max-width: 300px;
    height: 430px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);

    img {
      max-width: 100%;
      border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    }

    .card-bottom {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: ${theme.spacing.sm};

      .product-title {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: ${theme.fonts.size.P1};
        gap: 10px;
        margin-bottom: 15px;

        .vegetarien {
          padding: 5px;
          line-height: 0;
          background-color: ${theme.colors.quaternary};
          border-radius: ${theme.borderRadius.round};

          .icon {
            font-size: ${theme.fonts.size.P2};
          }
        }
      }

      .description-cta {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .description {
          color: ${theme.colors.greyBlue};
        }

        .price-button {
          display: flex;
          justify-content: space-between;

          .price {
            font-weight: ${theme.fonts.weights.medium};
          }

          .button-menu-page {
            background: ${theme.colors.quaternary};
            border: 1px solid ${theme.colors.quaternary};
            color: ${theme.colors.secondary};
            padding: 12px;

            &:hover {
              background: ${theme.colors.tertiary};
              border: 1px solid ${theme.colors.tertiary};
              color: ${theme.colors.secondary};
            }

            &:active {
              background: ${theme.colors.tertiary};
              border: 1px solid ${theme.colors.secondary};
              color: ${theme.colors.secondary};
            }
          }
        }
      }
    }
  }

  .product:hover {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
`;
