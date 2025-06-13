import { LuLogOut } from "react-icons/lu";

const LogoutButton = ({ ...props }) => {
  return (
    <>
      <button
        {...props}
        className="text-sm font-medium border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 py-1 px-4 border rounded shadow cursor-pointer inline-flex items-center"
      >
        <LuLogOut />
        <span>Logout</span>
      </button>
    </>
  );
};

export default LogoutButton;
