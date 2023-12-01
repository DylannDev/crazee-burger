/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiLockOpenFill } from "react-icons/pi";
import ToastAdmin from "./ToastAdmin";

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
      <ToastAdmin />
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
`;
