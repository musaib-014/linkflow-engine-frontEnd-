function PersonaCard({ persona, onDeletePersona, onEditPersona }) {
  return (
    <div className="persona-card">
      <h3>{persona.personaName}</h3>
      <p>{persona.description}</p>

      <div className="card-actions">
        <button onClick={() => onEditPersona(persona)}>Edit</button>
        <button onClick={() => onDeletePersona(persona.id)}>Delete</button>
      </div>
    </div>
  );
}

export default PersonaCard;
