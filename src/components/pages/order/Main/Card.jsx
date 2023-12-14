/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { PiCarrot } from "react-icons/pi";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import { FaTimesCircle } from "react-icons/fa";

export default function Card({
  title,
  imageSource,
  vegetarien,
  description,
  price,
  showDeleteButton,
  onDelete,
  onClick,
  isHoverabale,
}) {
  return (
    <CardStyled onClick={onClick} isHoverabale={isHoverabale}>
      {showDeleteButton && (
        <button
          className="delete-button"
          aria-label="delete-button"
          onClick={onDelete}
        >
          <FaTimesCircle />
        </button>
      )}
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
            <Button className="button-menu-page" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ isHoverabale }) => isHoverabale && hoverableStyle}

  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.round};
  /* width: auto; */
  /* min-width: 240px; */
  /* max-width: 300px; */
  max-height: 450px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  position: relative;

  .delete-button {
    display: flex;
    padding: 5px;
    cursor: pointer;
    color: ${theme.colors.red};
    background: ${theme.colors.white};
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: ${theme.fonts.size.P2};
    border-radius: ${theme.borderRadius.round};
    border: none;

    &:hover {
      background: ${theme.colors.background_white};
    }

    &:active {
      color: ${theme.colors.white};
      background: ${theme.colors.red};
    }
  }

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

const hoverableStyle = css`
  &:hover {
    transform: scale(1.03);
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }
`;
