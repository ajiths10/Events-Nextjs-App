import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useAuthentication } from "@/store/Auth";

const Header = () => {
  const router = useRouter();

  //global states
  const isAuthenticated = useAuthentication((state) => state.isAuthenticated);
  const setLogout = useAuthentication((state) => state.reset);

  const handleLogout = () => {
    if (isAuthenticated) {
      setLogout();
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-slate-600 h-[50px] grid grid-cols-12 p-3 w-full text-slate-200">
      <div className="col-span-2 lg:col-span-1 hover:font-semibold ml-5">
        <Link href="/">Home</Link>
      </div>

      <div className="col-span-6 lg:col-span-10 ml-5">
        <Link href="/events">All Events</Link>
      </div>

      <div className="col-span-4 lg:col-span-1 hover:cursor-pointer flex justify-end pr-2">
        <button onClick={handleLogout} className="hover:font-semibold">
          {isAuthenticated ? "Logout" : "Login"}
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" text-slate-100 w-5 h-5 inline-block ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
