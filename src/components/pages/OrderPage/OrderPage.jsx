import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <div className="logo">
            <Logo />
          </div>
          <div className="user-infos-icon">
            <div className="user-infos">
              <h1>
                Hey, <span>{username}</span>
              </h1>
              <Link to="/">
                <span>Se déconnecter</span>
              </Link>
            </div>
            <BsPersonCircle className="icon" />
          </div>
        </nav>
        <main></main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${theme.borderRadius.extraRound}
        ${theme.borderRadius.extraRound} 0px 0px;
      background: ${theme.colors.background_white};
      padding: 0px 70px 0px 20px;

      .logo {
        cursor: pointer;
      }

      .user-infos-icon {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${theme.colors.greyBlue};

        .user-infos {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: ${theme.gridUnit / 2}px;
          font-family: Open Sans;

          h1 {
            font-size: 16px;
            font-weight: 400;
            margin: 0;

            span {
              color: ${theme.colors.primary};
              font-weight: 700;
            }
          }

          a {
            font-size: 10px;
            font-weight: 400;
            text-decoration: none;
            background-color: transparent;
            color: ${theme.colors.greyBlue};
            padding: 0 0 ${theme.spacing.xxs} 0;
            text-align: right;
            border: none;
            cursor: pointer;
          }

          a:hover {
            text-decoration: underline;
            text-underline-offset: ${theme.spacing.xxs};
          }
        }

        .icon {
          font-size: ${theme.fonts.size.P4};
        }
      }
    }

    main {
      height: 100%;
      background: ${theme.colors.background_white};
      border-radius: 0px 0px ${theme.borderRadius.extraRound}
        ${theme.borderRadius.extraRound};
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    }
  }
`;
