import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import { Counter } from './components/Counter'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/get' element={<Message/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App