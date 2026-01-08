function PersonaCard({ persona }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}
    >
      <h3>{persona.personName}</h3>
      <p>{persona.personDescription}</p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default PersonaCard;
