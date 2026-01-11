function PersonaCard({ persona, onDeletePersona }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}
    >
      <h3>{persona.personaName}</h3>
      <p>{persona.description}</p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button>Edit</button>
        <button onClick={() => onDeletePersona(persona.id)}>Delete</button>
      </div>
    </div>
  );
}

export default PersonaCard;
