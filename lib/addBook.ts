import { Book } from "@/types/data";

export async function addBook(book: Book) {
  console.log("Adding book:", book);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`, {
    method: "POST",

    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to add book: ${error}`);
  }

  return res.json();
}
