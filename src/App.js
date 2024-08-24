import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Assuming you have a Home page
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AuthPage from './pages/AuthPage';
import NewsletterPage from './pages/NewsletterPage'; // Importing the NewsletterPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<AuthPage />} /> 
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
