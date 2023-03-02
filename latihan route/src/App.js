import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Team from './components/Team';
import Blog from './components/Blog';
import IsiBlog from './components/IsiBlog';
import NotFound from './components/NotFound';
import Login from './components/Login';
function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='team' element={<Team />} />
        </Route>
        <Route path='blog' element={<Blog />}>
          <Route path='blog/:slug' element={<IsiBlog />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
