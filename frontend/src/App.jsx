import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Chat from './pages/Chat.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
