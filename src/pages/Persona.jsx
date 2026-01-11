import { useState } from "react";
import PersonaList from "../components/Persona/PersonaList";
import PersonaForm from "../components/Persona/PersonaForm";
import "./Personas.css";

function Personas() {
  const [persons, setPersonas] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);

  function addPersona(persona) {
    setPersonas((prev) => [...prev, persona]);
  }

  function deletePersona(id) {
    setPersonas((prev) => prev.filter((p) => p.id !== id)); // adds all the elements with different id into Personas
  }

  function startEditPersona(persona) {
    setSelectedPersona(persona);
  }

  function updatePersona(updatedPersona) {
    setPersonas((prev) =>
      prev.map((p) => (p.id === updatedPersona.id ? updatedPersona : p))
    );
    setSelectedPersona(null);
  }

  return (
    <div className="persona-page">
      <h1>Personas</h1>

      <PersonaForm
        onAddPersona={addPersona}
        onUpdatePersona={updatePersona}
        selectedPersona={selectedPersona}
      />

      <PersonaList
        personas={persons}
        onDeletePersona={deletePersona}
        onEditPersona={startEditPersona}
      />
    </div>
  );
}

export default Personas;
