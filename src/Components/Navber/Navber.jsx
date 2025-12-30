import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-20 py-4">
      
      <div className="flex-1">
        <a className="font-bold text-2xl">CS — Ticket System</a>
      </div>

      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
   
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="btn w-full text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <i className="fa-solid fa-plus"></i>
                New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 space-x-8 text-[16px] items-center">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li>
            <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] gap-2">
              <i className="fa-solid fa-plus"></i>
              New Ticket
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
