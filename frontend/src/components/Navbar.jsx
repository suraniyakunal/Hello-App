import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  // const navLinkStyles = ({ isActive }) =>
  //   isActive
  //     ? "text-blue-200 font-semibold border-b-2 border-white"
  //     : "hover:text-blue-300";
  //

  return (
    <nav className='min-w-80 rounded-full flex justify-between mt-10 mr-80 ml-80 mb-4 p-3 align-middle bg-gray-600 text text-black '>
      <div id="logo" className='ml-5'>
        <li className='text-2xl bold list-none  '><NavLink to='/'>ChatApp</NavLink></li>
      </div>

      <ul className="flex gap-7 text-lg mr-5">
        <li className=" hover:text-orange-500 cursor-pointer opacity-40"><NavLink to='/'>Home</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/chat'>Chat</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/register'>Register</NavLink></li>
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

