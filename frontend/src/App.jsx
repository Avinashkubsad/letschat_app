import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";

import HomePage from "./pages/HomePage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";

const App = () => {
  const { authUser, checkAuth } = useAuthStore(); // destructuring the auth user
  //authUser → the current logged-in user object (or null if no one is logged in).
  // checkAuth → a function (action) that checks whether the user is authenticated (maybe by calling an API or checking local storage).

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  return (
    <div>
      <Navbar /> {/* Always visible */}
      <Routes>
        {" "}
        {/* Only renders the matched route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
