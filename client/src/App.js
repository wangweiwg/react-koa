import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BaiscLayout from './layout/BasicLayout'
import Login from './containers/Login/index'
import Register from './containers/Login/register'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/*" element={ <BaiscLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
