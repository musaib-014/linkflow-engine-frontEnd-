import { useEffect, useState } from "react";

function PersonaForm({ onAddPersona, onUpdatePersona, selectedPersona }) {
  const [personaName, setPersonaName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedPersona) {
      setPersonaName(selectedPersona.personaName);
      setDescription(selectedPersona.description);
    } else {
      setPersonaName("");
      setDescription("");
    }
  }, [selectedPersona]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!personaName.trim() || !description.trim()) return;

    if (selectedPersona) {
      onUpdatePersona({
        id: selectedPersona.id,
        personaName,
        description,
      });
    } else {
      onAddPersona({
        id: Date.now(),
        personaName,
        description,
      });
    }

    setPersonaName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedPersona ? "Edit Person" : "Create Persona"}</h2>

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

      <button type="submit">
        {selectedPersona ? "Upddate Person" : "Add Persona"}
      </button>
    </form>
  );
}

export default PersonaForm;
