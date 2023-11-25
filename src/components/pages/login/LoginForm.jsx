import { useState } from "react";

export default function LoginForm() {
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
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
