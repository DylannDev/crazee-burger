/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { RiDeleteBin2Line } from "react-icons/ri";
import { formatPrice } from "../../../../../utils/maths";

export default function CartCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
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
          <span className="quantity-label">x {quantity}</span>
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

      .quantity-label {
        color: ${theme.colors.greyBlue};
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
