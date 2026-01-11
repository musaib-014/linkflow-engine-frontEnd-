const BASE_URL = "http://localhost:5000/api/personas";

//GET all persona
export async function fetchPersonas() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to Fetch personas");
  return res.json();
}

//POST create persona
export async function createPersona(persona) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  });

  if (!res.ok) throw new Error("Failed to create the Persona");
}

//PUT update persona
export async function updatePersona(persona) {
  const res = await fetch(`${BASE_URL}/${persona.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  });

  if (!res.ok) throw new Error("Failed to update persona");
  return res.json();
}

// DELETE persona
export async function deletePersona(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete persona");
}
