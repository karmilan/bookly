export type Book = {
  bookid?: number;
  title: string;
  author: string;
  description: string;
  status: "read" | "unread";
  user_id: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
