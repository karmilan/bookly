export async function loginUser(email: string, password: string) {
  const res = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");
  const data = await res.json();
  return data.access_token; // adjust if your API returns differently
}
