import { useAuth } from "@/context/AuthContext";
import { Book } from "@/types/data";
import { getUserFromToken } from "@/utils/getUserFromToken";
import { LuBookOpen, LuLibrary, LuSparkle, LuUser } from "react-icons/lu";
import LogoutButton from "./LogoutButton";

const Header = ({ books }: { books: Book[] }) => {
  const { logout } = useAuth();
  const email = getUserFromToken()?.sub;

  return (
    <header className="bg-white/80  backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 mb-8 shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <LuLibrary className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <LuSparkle className="w-2.5 h-2.5 text-yellow-800" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bookly
              </h1>
              <p className="text-sm text-gray-500">Personal Book Collection</p>
            </div>
          </div>

          {/* Center Section - Quick Stats */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
              <LuBookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                {books.length} Books
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-green-700">
                {books.filter((book) => book.status === "read").length} Read
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 rounded-lg">
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-orange-700">
                {books.filter((book) => book.status === "unread").length}{" "}
                Pending
              </span>
            </div>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <LuUser className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">{email}</span>
            </div>
            <LogoutButton onClick={logout} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
