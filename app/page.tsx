"use client";
import BooksTable from "@/components/BooksTable";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import SearchFilterBar from "@/components/SearchFilterBar";
import Button from "@/components/ui/Button";
import { deleteBook } from "@/lib/deleteBook";
import { getBooksByUser } from "@/lib/getBooksByUser";
import { Book } from "@/types/data";
import { getUserFromToken } from "@/utils/getUserFromToken";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

export default function Home() {
  const router = useRouter();

  const [userId, setUserId] = useState<number | null>(null);

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All Books");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  useEffect(() => {
    async function loadBooks() {
      try {
        const userId = getUserFromToken();
        setUserId(userId?.userid);
        const booksData = await getBooksByUser(userId?.userid || 0);
        setBooks(booksData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  // delete book function
  const handleDelete = async (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirm) return;

    try {
      await deleteBook(id);
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <Header books={books} />

          {/* Search and Filters */}
          <div className="mb-8">
            <Button
              icon={<LuPlus className="w-4 h-4 mr-2" />}
              label="Add New Book"
              onclick={() => router.push(`/add-book/${userId}`)}
            />
            <SearchFilterBar
              value={searchQuery}
              onChange={setSearchQuery}
              filterValue={filterValue}
              onFilterChange={handleFilterChange}
            />
          </div>
          <BooksTable
            filterValue={filterValue}
            searchQuery={searchQuery}
            books={books}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}
