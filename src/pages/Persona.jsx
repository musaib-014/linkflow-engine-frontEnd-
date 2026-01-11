import { useState } from "react";
import PersinaList from "../components/Persona/PersonaList";
import PersonaForm from "../components/Persona/PersonaForm";
import "./Persona.css";

function Personas() {
  const [persons, setPersonas] = useState([]);

  function addPersona(persona) {
    setPersonas((prev) => [...prev, persona]);
  }

  return (
    <div>
      <h1>Personas</h1>

      <PersonaForm onAddPersona={addPersona} />

      <PersinaList personas={persons} />
    </div>
  );
}

export default Personas;
