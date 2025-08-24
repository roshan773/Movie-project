import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AddMovie from "../Pages/AddMovie";
import AllMovies from "../Pages/AllMovies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateMovie from "../Pages/UpdateMovie";

const Allroutes = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update/:movieId" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
