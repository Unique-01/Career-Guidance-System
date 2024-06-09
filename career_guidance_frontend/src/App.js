import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareerForm from "./pages/CareerForm";
import CareerList from "./pages/CareerList";
import CareerDetail from "./pages/CareerDetail";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="update-profile" element={<Profile/>}/>
          <Route path="careers" element={<CareerList/>}/>
          <Route path="careers/:careerId" element={<CareerDetail/>}/>
          <Route path="careers/new" element={<CareerForm/>}/>
          <Route path="careers/edit/:careerId" element={<CareerForm/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
