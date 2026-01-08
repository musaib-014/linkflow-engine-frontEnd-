import { useState } from "react";
import PersinaList from "../components/Persona/PersonaList";

function Personas() {
  const [persons, setPersonas] = useState([
    {
      id: 1,
      personaName: "The Technical Admin",
      description: "Strict, security-focused, minimal negotiation.",
    },
  ]);

  return (
    <div>
      <h1>Personas</h1>
      <PersinaList personas={persons} />
    </div>
  );
}

export default Personas;
