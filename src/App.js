import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Profile from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Profile />
      <Projects />
      <Contact />
      {/* <div>
        <Routes>
          <Route path = "/" element={<Header />} />
          <Route path = "/profile" element={<Profile />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={<Contact />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
 