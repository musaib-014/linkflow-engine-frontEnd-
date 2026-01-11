import { useState } from "react";
import PersonaList from "../components/Persona/PersonaList";
import PersonaForm from "../components/Persona/PersonaForm";
import "./Personas.css";

function Personas() {
  const [persons, setPersonas] = useState([]);

  function addPersona(persona) {
    setPersonas((prev) => [...prev, persona]);
  }

  function deletePersona(id) {
    setPersonas((prev) => prev.filter((p) => p.id !== id)); // adds all the elements with different id into Personas
  }

  return (
    <div className="persona-page">
      <h1>Personas</h1>

      <PersonaForm onAddPersona={addPersona} />

      <PersonaList personas={persons} onDeletePersona={deletePersona} />
    </div>
  );
}

export default Personas;
