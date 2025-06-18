import React from "react";

type EditFormProps = {
  title: string;
  setTitle: (title: string) => void;
  setAuthor: (author: string) => void;
  setDescription: (description: string) => void;
  setStatus: (status: "read" | "unread") => void;
  author: string;
  description: string;
  status: "read" | "unread";
  handleSubmit: (e: React.FormEvent) => void;
  success?: boolean;
  error?: string | null;
};

const EditForm: React.FC<EditFormProps> = ({
  title,
  author,
  description,
  status,
  handleSubmit,
  setTitle,
  setAuthor,
  setDescription,
  setStatus,
  success,
  error,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
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
      </form>
    </>
  );
};

export default EditForm;
