import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

export default function LoginForm() {
  // states
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    navigate(`/order/${input}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="text-container">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div className="input-button-container">
        <TextInput
          onChange={handleChange}
          value={input}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom"}
          required
        />

        <PrimaryButton
          className="button-login-page"
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  max-width: 500px;
  width: 464px;
  font-family: "Amatic SC";
  color: ${theme.colors.white};
  padding: 40px ${theme.spacing.lg};
  margin: 0 auto;
  text-align: center;

  .text-container {
    width: 100%;

    hr {
      border: 1.5px solid ${theme.colors.primary};
      margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
      font-size: ${theme.fonts.size.P5};
    }

    h2 {
      font-size: ${theme.fonts.size.P4};
      margin: 0;
    }
  }

  .input-button-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .icon {
    font-size: ${theme.fonts.size.P1};
  }

  .button-login-page {
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.secondary};
    padding: 18px 24px;

    &:hover {
      background: ${theme.colors.quaternary};
      border: 1px solid ${theme.colors.quaternary};
      color: ${theme.colors.secondary};
    }

    &:active {
      background: ${theme.colors.quaternary};
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  }
`;
