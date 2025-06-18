// "use client";

import { Book } from "@/types/data";
import { useRouter } from "next/navigation";
import { LuSquarePen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

type BooksTableProps = {
  filterValue?: string;
  searchQuery?: string;
  books?: Book[];
  handleDelete: (id: number) => void;
};

const BooksTable: React.FC<BooksTableProps> = ({
  filterValue,
  searchQuery,
  books,
  handleDelete,
}) => {
  const router = useRouter();

  // Sample book data
  // const books = [
  //   {
  //     id: 1,
  //     title: "The Great Gatsby",
  //     author: "F. Scott Fitzgerald",
  //     description:
  //       "A story of wealth, love, and the American Dream in the 1920s.",
  //     status: "read",
  //   },
  //   {
  //     id: 2,
  //     title: "1984",
  //     author: "George Orwell",
  //     description: "A dystopian novel about totalitarianism and surveillance.",
  //     status: "unread",
  //   },
  //   {
  //     id: 3,
  //     title: "Pride and Prejudice",
  //     author: "Jane Austen",
  //     description:
  //       "A romantic novel exploring social class and family pressures.",
  //     status: "read",
  //   },
  // ];

  const handleEdit = (book: Book) => {
    console.log("Edit book:", book);
    router.push(`/edit-book/${book.bookid}`);
  };

  // const handleDelete = (id: number) => {
  //   alert(`Delete book with ID: ${id}`);
  //   // Implement delete logic here
  // };

  return (
    <div className="container">
      <div className="overflow-x-auto drop-shadow-xl rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Author
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {(books ?? []).map(
              (book) =>
                book.title
                  .toLowerCase()
                  .includes(searchQuery?.toLowerCase() || "") &&
                (filterValue === "All Books" ||
                  book.status === filterValue) && (
                  <tr key={book.bookid} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.bookid}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.author}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.status === "read" ? (
                        <span className="text-green-800 font-semibold bg-green-100 px-4 py-1 rounded-full">
                          Read
                        </span>
                      ) : (
                        <span className="text-orange-800 font-semibold bg-orange-100 px-4 py-1 rounded-full">
                          Unread
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleEdit(book)}
                        className="mr-2 px-4 py-2 cursor-pointer"
                      >
                        {/* Edit */}
                        <LuSquarePen className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          book.bookid !== undefined && handleDelete(book.bookid)
                        }
                        className="px-4 py-2 cursor-pointer"
                      >
                        {/* Delete */}
                        <RiDeleteBin6Line className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksTable;
