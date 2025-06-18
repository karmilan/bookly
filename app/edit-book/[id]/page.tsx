"use client";
import EditForm from "@/components/EditForm";
import { updateBook } from "@/lib/updateBook";
import { Book } from "@/types/data";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const { id } = use(params);
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<"read" | "unread">("unread");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const bookId = parseInt(id);
      await updateBook(bookId, {
        title,
        author,
        description,
        status,
      } as Book);
      setSuccess(true);
      router.push("/");
      //   if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Update the Book with ID: {id}
        </h2>

        {/* <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              className="w-full p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Author</label>
            <input
              className="w-full p-2 border rounded"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <input
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              className="w-full p-2 border rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value as "read" | "unread")}
              required
            >
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-yellow-600 text-white rounded"
          >
            Update Book
          </button>

          {success && <p className="text-green-600">Book updated!</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
        </form> */}
        <EditForm
          title={title}
          author={author}
          description={description}
          status={status}
          handleSubmit={handleSubmit}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setDescription={setDescription}
          setStatus={setStatus}
          success={success}
          error={error}
        />
      </div>
    </>
  );
};

export default Page;
