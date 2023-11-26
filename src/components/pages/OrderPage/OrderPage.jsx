import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Bonjour Bob</h1>
      <button onClick={handleSignOut}>Déconnexion</button>
    </>
  );
}
