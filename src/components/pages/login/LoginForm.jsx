import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
        />

        <PrimaryButton
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
  font-family: "Amatic SC", cursive;
  color: white;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;

  .text-container {
    width: 100%;

    hr {
      border: 1.5px solid #f56a2c;
      margin-bottom: 40px;
    }

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 36px;
      margin: 0;
    }
  }

  .input-button-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .icon {
    font-size: large;
  }
`;
