/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { RiDeleteBin2Line } from "react-icons/ri";
import { formatPrice } from "../../../../../utils/maths";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

export default function CartCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  incrementProduct,
  decrementProduct,
}) {
  return (
    <CartCardStyled>
      <img src={imageSource} alt={title} />
      <div className="infos">
        <div className="product-infos">
          <span className="title">{title}</span>
          <span>{formatPrice(price)}</span>
        </div>
        <div className="quantity">
          <div className="quantity-buttons">
            <div className="buttons-increment-decrement">
              <RiArrowUpSFill onClick={incrementProduct} className="up" />
              <RiArrowDownSFill onClick={decrementProduct} className="down" />
            </div>
            <span className="quantity-label">x {quantity}</span>
          </div>
          <RiDeleteBin2Line className="icon" onClick={onDelete} />
        </div>
      </div>
    </CartCardStyled>
  );
}

const CartCardStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.P0};
  display: flex;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  img {
    border-top-left-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: ${theme.borderRadius.round};
    width: 33%;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    width: 100%;

    .product-infos {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .title {
        font-weight: ${theme.fonts.weights.bold};
        font-size: 16px;
      }
    }

    .quantity {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
      width: 33%;

      .quantity-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .buttons-increment-decrement {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: ${theme.fonts.size.XS};

          .up {
            cursor: pointer;
            background-color: ${theme.colors.quaternary};
            border-radius: ${theme.borderRadius.subtle};
          }

          .down {
            cursor: pointer;
            background-color: ${theme.colors.quaternary};
            border-radius: ${theme.borderRadius.subtle};
          }
        }

        .quantity-label {
          color: ${theme.colors.greyBlue};
        }
      }

      .icon {
        cursor: pointer;
        font-size: 16px;
      }
      .icon:hover {
        color: ${theme.colors.red};
      }
      .icon:active {
        color: ${theme.colors.redSecondary};
      }
    }
  }
`;
