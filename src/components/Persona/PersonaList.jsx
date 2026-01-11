import PersonaCard from "./PersonaCard";

function PersonaList({ personas, onDeletePersona }) {
  return (
    <div className="persona-grid">
      {personas.map((persona) => (
        <PersonaCard
          key={persona.id}
          persona={persona}
          onDeletePersona={onDeletePersona}
        />
      ))}
    </div>
  );
}

export default PersonaList;
