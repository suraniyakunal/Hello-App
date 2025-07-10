// layout/MainLayout.jsx
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <div id="main" className='bg-green-400 min-h-screen w-full'>
      <div className="flex flex-col">
        <div id="nav">
          <Navbar />
        </div>

        <main className="">
          <Outlet /> {/* This renders the current route’s page */}
        </main>
        <div id="footer" className='fixed bottom-0 text-center w-full justify-center'>
          <Footer />
        </div>
      </div>

    </div>
  );
}

