export async function loginUser(email: string, password: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!res.ok) throw new Error("Invalid credentials");
  const data = await res.json();
  return data.access_token;
}
