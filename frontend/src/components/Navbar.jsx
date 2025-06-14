import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-600 text-white px-3 py-3 rounded-md flex justify-between items-center shadow">
      <div>
        <h1 className="text-2xl font-sans font-bold">Chatter</h1>

        <ul className="hidden md:flex gap-6 text-lg ">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li>Message</li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

