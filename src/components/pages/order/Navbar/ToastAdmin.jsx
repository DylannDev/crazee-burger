import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "../../../../theme";

export default function ToastAdmin() {
  return (
    <ToastAdminStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </ToastAdminStyled>
  );
}

const ToastAdminStyled = styled.div`
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
