export const downloadPdf = async (data) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch("http://localhost:3001/api/v1/dnd5e/pdf", {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
