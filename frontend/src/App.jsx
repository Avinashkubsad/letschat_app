import React from "react";
import Navbar from "./components/Navbar.jsx";


import HomePage from "./pages/HomePage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


import { Routes, Route } from "react-router-dom";


const App = () => (
  <div>
    <Navbar /> {/* Always visible */} 
    <Routes> {/* Only renders the matched route */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </div>
);

export default App;
