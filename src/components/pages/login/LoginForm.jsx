import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

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
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button>Accéder à mon espace</button>
      </div>
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
  width: 464px;
  font-family: "Amatic SC", cursive;
  color: white;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;

  .input-button-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-with-icon {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      border-radius: 5px;
      background: #fff;
      padding: 18px 24px;
      margin: 18px 0;

      .icon {
        color: #747b91;
        width: 15px;
      }

      input {
        border: none;
        width: 100%;
        &::placeholder {
          color: #d3d3d3;
          font-size: 15px;
          font-weight: 400;
          line-height: 17px;
        }
      }
    }
  }

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
`;
