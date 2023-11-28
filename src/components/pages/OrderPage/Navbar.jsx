/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>
      <div className="right-side">
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
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.background_white};
  padding: 0px 70px 0px 20px;

  .left-side {
    cursor: pointer;
  }

  .right-side {
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
`;
