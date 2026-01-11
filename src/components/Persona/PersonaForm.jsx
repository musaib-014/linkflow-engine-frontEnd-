import { useState } from "react";

function PersonaForm({ onAddPersona }) {
  const [personaName, setPersonaName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!personaName.trim() || !description.trim()) return;

    const newPersona = {
      id: Date.now(),
      personaName,
      description,
    };

    onAddPersona(newPersona);

    setPersonaName("");
    description("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Persona</h2>

      <div>
        <label>Persona Name</label>
        <input
          type="text"
          value={personaName}
          onChange={(e) => setPersonaName(e.target.value)}
        />
      </div>
      <div>
        <label>Persona Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Add Persona</button>
    </form>
  );
}

export default PersonaForm;
