import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUser } from "../../../api/user";

export default function LoginForm() {
  // states
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    authenticateUser(username);

    setUsername("");
    navigate(`/order/${username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
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
          value={username}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom"}
          variant="large"
          required
        />

        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
          variant="large"
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
  color: ${theme.colors.quaternary};
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
    gap: 18px;
    margin-top: 18px;
    width: 100%;

    .input-name {
    }
  }

  .icon {
    font-size: ${theme.fonts.size.P1};
  }
`;
