"use client";
import { LuSearch } from "react-icons/lu";

type SearchFilterBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
};

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  value,
  onChange,
  filterValue,
  onFilterChange,
}) => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search books by title..."
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className="pl-10 flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <form className="max-w-sm mx-auto">
            <select
              value={filterValue}
              onChange={(e) => onFilterChange?.(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-4"
            >
              <option defaultValue="All Books">All Books</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchFilterBar;
