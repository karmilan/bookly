"use client";

import AddForm from "@/components/AddForm";
import { addBook } from "@/lib/addBook";
import { Book } from "@/types/data";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
  const { id } = use(params);
  console.log("User ID:", id);
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
        user_id: parseInt(id),
      } as Book);
      setSuccess(true);
      setTitle("");
      setAuthor("");
      setDescription("");
      router.push("/");
    } catch (err: unknown) {
      setError(err.message);
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
