import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
        <button>
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
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
        color: #17161a;
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

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 18px 24px;
      color: #ffffff;
      border-radius: 5px;
      border: 1px solid #ff9f1b;
      background: #ff9f1b;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      cursor: pointer;

      .icon {
        font-size: large;
      }
    }

    button:hover {
      background: #ffffff;
      color: #ff9f1b;
    }

    button:active {
      background: #ff9f1b;
      color: #ffffff;
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
