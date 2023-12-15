/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiLockOpenFill } from "react-icons/pi";
import ToastAdmin from "./ToastAdmin";
import { AdminContext } from "../../../../context/AdminContext";
import { useContext } from "react";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin, setIsCollapsed } =
    useContext(AdminContext);

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
    setIsCollapsed(false);
  };

  return (
    <NavbarRightSideStyled>
      <ToastAdmin />
      <ToggleButton
        onToggle={showNotification}
        isChecked={isModeAdmin}
        labelIfUnchecked={"Activer le mode admin"}
        labelIfChecked={"Désactiver le mode admin"}
      />
      <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: ${theme.colors.quaternary};
`;
