export async function deleteBook(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${id}`,
    {
      method: "DELETE",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to delete book: ${error}`);
  }

  return true;
}
