import { useRouter } from "next/navigation";
import { FC } from "react";

type AddFormProps = {
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  description: string;
  setDescription: (description: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  success: boolean;
  error: string | null;
};

const AddForm: FC<AddFormProps> = ({
  title,
  setTitle,
  author,
  setAuthor,
  description,
  setDescription,
  handleSubmit,
  success,
  error,
}) => {
  const router = useRouter();
  return (
    <>
      {/* <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            className="w-full p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <input
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Book
        </button>

        {success && <p className="text-green-600">Book added successfully!</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
      </form> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            ← Back
          </button>

          <button
            type="submit"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Add Book
          </button>
        </div>

        {success && (
          <p className="text-green-600 text-sm">Book added successfully!</p>
        )}
        {error && <p className="text-red-600 text-sm">Error: {error}</p>}
      </form>
    </>
  );
};

export default AddForm;
