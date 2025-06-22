import { SignupUser } from "@/types/data";

export async function signup(user: SignupUser) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Signup failed");
  }

  return res.json();
}
