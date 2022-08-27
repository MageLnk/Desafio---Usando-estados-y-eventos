import { useState } from "react";
// Components
import Input from "./components/Input";

const App = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="app-container">
      <h1 className="app-titles">¡Bienvenido extraño!</h1>
      <h2 className="app-titles">Por favor, valide su contraseña</h2>
      <h3 className="app-titles">Y con eso, descubra el acceso secreto al club</h3>
      <div className="app-inputs">
        <Input type="Usuario" value={user} setValue={setUser} />
      </div>
      <div className="app-inputs">
        <Input type="Contraseña" value={password} setValue={setPassword} />
      </div>
      {password === "252525" && (
        <>
          <span style={{ margin: "0.3rem" }}>¡Bienvenido al club {user}!</span>
          <button
            className="app-button"
            onClick={() => {
              console.log("Lets go");
            }}
          >
            ¡Entrar!
          </button>
        </>
      )}
    </div>
  );
};

export default App;
