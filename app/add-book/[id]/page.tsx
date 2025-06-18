"use client";

import AddForm from "@/components/AddForm";
import { addBook } from "@/lib/addBook";
import { Book } from "@/types/data";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  // const { id } = params;
  const params = useParams();
  const id = parseInt(params.id as string);
  console.log("ID from params:", typeof id, id);
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await addBook({
        title,
        author,
        description,
        status: "unread",
        user_id: id,
      } as Book);
      setSuccess(true);
      setTitle("");
      setAuthor("");
      setDescription("");
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
          Add a New Book
        </h2>
        <AddForm
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
          success={success}
          error={error}
        />
      </div>
    </>
  );
};

export default Page;
