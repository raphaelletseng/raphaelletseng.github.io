import './App.css';
import Home from './pages/Home';
import Illustrations from './pages/Illustrations';
import Nav from './Nav';
import Blog from './pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/illustration" element={<Illustrations />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
