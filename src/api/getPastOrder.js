const apiUrl = import.meta.env.VITE_API_URL;

export default async function getPastOrder(order) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${apiUrl}/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
