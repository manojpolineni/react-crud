import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about';
import NavBar from './components/navbar';
import Profile from './pages/profile';
import HomePage from './pages/home';
import Form from './pages/edit';
import Update from './pages/update';
import FooterPage from './components/footer';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/edit" element={<Form />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
      <FooterPage />
    </>  
  );
}
export default App;