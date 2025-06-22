"use client";
import EditForm from "@/components/EditForm";
import { updateBook } from "@/lib/updateBook";
import { Book } from "@/types/data";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const params = useParams();
  const id = parseInt(params.id as string);

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
      await updateBook(id, {
        title,
        author,
        description,
        status,
      } as Book);
      setSuccess(true);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Update the Book with ID: {id}
        </h2>

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
