/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiLockOpenFill } from "react-icons/pi";

export default function NavbarRightSide({ username }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const showNotification = () => {
    if (!isModeAdmin) {
      toast("Mode admin activé", {
        icon: <PiLockOpenFill size={30} color={theme.colors.quaternary} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton
        onToggle={showNotification}
        labelIfUnchecked={"Activer le mode admin"}
        labelIfChecked={"Désactiver le mode admin"}
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: ${theme.colors.quaternary};

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--default.Toastify__toast--close-on-click {
    background: ${theme.colors.secondary};
  }

  .Toastify__toast-body.body-toast {
    color: ${theme.colors.tertiary};
  }

  .Toastify__progress-bar.Toastify__progress-bar--animated.Toastify__progress-bar-theme--dark.Toastify__progress-bar--default {
    background: ${theme.colors.quaternary};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
