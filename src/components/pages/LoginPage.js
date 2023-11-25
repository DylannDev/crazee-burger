import { useState } from "react";

export const LoginPage = () => {
  // states
  const [input, setInput] = useState("");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bonjour " + input);
    setInput("");
  };

  // Affichage
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h3>Connectez-vous</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
};
