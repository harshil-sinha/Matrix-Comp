import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MyResponsibility from './components/MyResponsibility';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-responsibility" element={<MyResponsibility />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
