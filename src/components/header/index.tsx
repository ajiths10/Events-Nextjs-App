import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-600 h-[50px] grid grid-cols-12 p-3 w-full text-slate-200">
      <div className="col-span-2 lg:col-span-1 hover:font-semibold ml-5">
        <Link href="/">Home</Link>
      </div>
      <div className="col-span-6 lg:col-span-10 ml-5">
        <Link href="/events">All Events</Link>
      </div>
      <div className="col-span-4 lg:col-span-1 hover:cursor-pointer flex justify-end pr-2">
        <span className="hover:font-semibold">
          Logout{" "}
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" text-slate-100 w-5 h-5 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Header;
