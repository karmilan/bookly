import { LuLibrary, LuSparkle } from "react-icons/lu";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <>
      <div className="text-center mb-8">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <div className="relative">
              <LuLibrary className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <LuSparkle className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bookly
            </h1>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Organize, track, and discover your personal book collection with style
        </p>
      </div>
    </>
  );
};

export default Header;
