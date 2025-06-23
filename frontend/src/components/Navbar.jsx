import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-blue-200 font-semibold border-b-2 border-white"
      : "hover:text-blue-300";


  return (
    <nav className="bg-emerald-500 text-white px-4 py-3 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">ChatApp</h1>

      <ul className="hidden md:flex gap-6 text-lg">
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/' className={navLinkStyles}>Home</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/chat' className={navLinkStyles}>Chat</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/register' className={navLinkStyles}>Register</NavLink></li>
      </ul>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

