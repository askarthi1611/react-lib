import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Sidebar from './components/sidebar'; // Import Sidebar component
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/notfount';
import UserForm from './components/userforms';
import $ from 'jquery';
import UserDataTable from './components/UserDataTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> {/* Render Sidebar component */}
          <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reg" element={<UserForm />} />
            <Route path="/userlist" element={<UserDataTable />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
