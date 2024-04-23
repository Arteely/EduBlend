import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="h-12" src="./src/assets/EdublendLogo.png" alt="" />
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              to="/"
              className="px-3 py-1 text-sm text-grey rounded hover:bg-gray-100"
            >
              Home
            </Link>
            <a
              href="#"
              className="px-3 py-1 text-sm text-grey rounded hover:bg-gray-100"
            >
              Courses
            </a>
            <Link
              to="/about-us"
              className="px-3 py-1 text-sm text-grey rounded hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/sign-in"
              className="px-3 py-1 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white"
            >
              Sign-In
            </Link>
            <Link
              to="/sign-up"
              className="px-3 py-1 text-sm text-purple border-2 border-purple rounded-full hover:text-white hover:bg-dark-purple"
            >
              Sign-Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
