import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white text-lg font-bold">
              MyBrand
            </a>
            {/* Navigation Links */}
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/home"
                  className="text-white hover:text-gray-200 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-gray-200 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white hover:text-gray-200 transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-gray-200 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="relative w-1/3">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3a8 8 0 1114 14 8 8 0 01-14-14zM21 21l-4.35-4.35"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
