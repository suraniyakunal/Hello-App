import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-500 text-white px-4 py-3 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">ChatApp</h1>

      <ul className="hidden md:flex gap-6 text-lg">
        <li className="hover:text-blue-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-300 cursor-pointer">Message</li>
        <li className="hover:text-blue-300 cursor-pointer">Profile</li>
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

