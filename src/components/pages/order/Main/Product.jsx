/* eslint-disable react/prop-types */
import styled from "styled-components";
import { PiCarrot } from "react-icons/pi";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";

export default function Product({
  title,
  imageSource,
  vegetarien,
  description,
  price,
}) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="card-bottom">
        <div className="product-title">
          <span>{title}</span>
          {vegetarien && (
            <span className="vegetarien">
              <PiCarrot className="icon" />
            </span>
          )}
        </div>
        <div className="description-cta">
          <div className="description">{description}</div>
          <div className="price-button">
            <div className="price">{formatPrice(price)}</div>
            <PrimaryButton className="button-menu-page" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.round};
  /* width: auto; */
  /* min-width: 240px; */
  /* max-width: 300px; */
  /* height: 430px; */
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
        margin-bottom: 15px;
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

  &:hover {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
`;
