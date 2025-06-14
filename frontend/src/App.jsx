import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='p-6'>
        Welcome to the chat app
      </main>


      <Footer />
    </div>

  )
}

export default App
