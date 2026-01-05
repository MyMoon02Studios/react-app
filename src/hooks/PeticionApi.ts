const enviarPeticionApi = async (next: any, user: any, apiKey: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Es mejor usar el body que los headers para datos
        title: "En construcciones",
        content: next.text,
        author: user?.user?.name || "Desconocido",
        key: apiKey,
      },
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.error("Error en la petición:", err);
  }
};

export default enviarPeticionApi;