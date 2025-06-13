import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Bookly</Link>
      </div>
      <div className="space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
