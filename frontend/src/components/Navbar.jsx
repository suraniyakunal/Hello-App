import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  // const navLinkStyles = ({ isActive }) =>
  //   isActive
  //     ? "text-blue-200 font-semibold border-b-2 border-white"
  //     : "hover:text-blue-300";
  //

  return (
    <nav className='w-8 bg-white text-black opacity-5'>
      <div id="logo">
        <h1 className="text-2xl font-bold">ChatApp</h1>

      </div>

      <ul className="gap-6 text-lg">
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/'>Home</NavLink></li>
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

