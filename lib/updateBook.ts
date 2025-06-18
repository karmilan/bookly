import { Book } from "@/types/data";

export async function updateBook(id: number, book: Book) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update book: ${error}`);
  }

  return res.json();
}
