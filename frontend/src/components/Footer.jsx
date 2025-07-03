import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 mt-auto">
      <div className=" justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</p>

        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-300 transition">Privacy</a>
          <a href="#" className="hover:text-blue-300 transition">Terms</a>
          <a href="#" className="hover:text-blue-300 transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

