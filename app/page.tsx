"use client";
import BooksTable from "@/components/BooksTable";
import Header from "@/components/Header";
import SearchFilterBar from "@/components/SearchFilterBar";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All Books");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <Header />

        {/* Search and Filters */}
        <div className="mb-8">
          <Button
            icon={<LuPlus className="w-4 h-4 mr-2" />}
            label="Add New Book"
          />
          <SearchFilterBar
            value={searchQuery}
            onChange={setSearchQuery}
            filterValue={filterValue}
            onFilterChange={handleFilterChange}
          />
        </div>
        <BooksTable filterValue={filterValue} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
