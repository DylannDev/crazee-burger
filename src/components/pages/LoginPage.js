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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Affichage
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
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
