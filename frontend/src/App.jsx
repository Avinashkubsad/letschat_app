import React from "react";
import Navbar from "./components/Navbar.jsx";

import { Routes,Route} from "react-router-dom";

const App = () => (
  <div>

    <Navbar/>                           //  ← Always visible
                                   //         ← Only renders the matched route
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/login" element={<SignInPage />}/>
      <Route path="/settings" element={<SettingsPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>



    </Routes>
  </div>
);

export default App;
