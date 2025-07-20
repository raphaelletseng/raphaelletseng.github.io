import './App.css';
import Home from './pages/Home';
import Illustrations from './pages/Illustrations';
import Nav from './Nav';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogHome from './pages/BlogHome';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="illustration" element={<Illustrations />} />
        <Route path="blog" element={<BlogHome />} />
        <Route path="blog/:slug" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
