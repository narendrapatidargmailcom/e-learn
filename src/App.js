import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/common/Navbar"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";




function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white">
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="login" element={<Login  setIsLoggedIn={setIsLoggedIn} />}> </Route>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}> </Route>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
               {<Dashboard/>}
            </PrivateRoute>
          } />

      </Routes>

    </div>
  );
}

export default App;
