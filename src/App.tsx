import './App.css'
import Home from './pages/Home'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
