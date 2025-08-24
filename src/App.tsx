import './App.css';
import Home from './pages/Home';
import Illustrations from './pages/Illustrations';
import Nav from './Nav';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogHome from './pages/BlogHome';
import WhyIClimb from './pages/WhyIClimb';
import Gaspesie from './pages/Gaspesie';
import RunningAroundOutside from './pages/RunningAroundOutside';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="illustration" element={<Illustrations />} />
        <Route path="blog" element={<BlogHome />} />
        <Route path="blog/:slug" element={<BlogPage />} />
        <Route path="why-i-climb" element={<WhyIClimb />} />
        <Route path="gaspesie" element={<Gaspesie />} />
        <Route path="running" element={<RunningAroundOutside />} />
      </Routes>
    </Router>
  );
}

export default App;
