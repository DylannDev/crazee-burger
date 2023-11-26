/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </>
  );
}
