import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import About from './components/About';
import Blog from './components/Blog';
import Fun from './components/Fun';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/fun" element={<Fun />} />
    </Routes>
    </>
  );
}

export default App;
