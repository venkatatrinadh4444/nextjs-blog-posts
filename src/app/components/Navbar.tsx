import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-between px-10 py-2 bg-blue-50">
      <Link href="/dashboard/first-page">
        <p className="cursor-pointer text-gray-600 font-semibold hover:text-blue-500 transition-all duration-200 ease-in-out">
          FirstPage
        </p>
      </Link>
      <Link href="/dashboard/second-page">
        <p className="cursor-pointer text-gray-600 font-semibold hover:text-blue-500 transition-all duration-200 ease-in-out">
          SecondPage
        </p>
      </Link>
      <Link href="/dashboard/third-page">
        <p className="cursor-pointer text-gray-600 font-semibold hover:text-blue-500 transition-all duration-200 ease-in-out">
          ThirdPage
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
