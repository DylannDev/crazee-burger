import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <input
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  max-width: 500px;
  font-family: "Amatic SC", cursive;
  color: white;
  padding: 2.5rem 2rem;
  margin: 0 auto;

  hr {
    border: 1px solid #f56a2c;
    width: 100%;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }
`;
