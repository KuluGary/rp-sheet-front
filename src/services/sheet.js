const ENDPOINT_URL = import.meta.env.VITE_SERVER_URL;

export const downloadPdf = async (data) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(`´${ENDPOINT_URL}/api/v1/dnd5e/pdf`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
