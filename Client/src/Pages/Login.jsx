import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const BASEURL = import.meta.env.VITE_BASEURL;

const Login = () => {
  const [formData, setformData] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setformData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/auth/login`, formData, {
        withCredentials: true,
      });
      console.log("Login successful:", res.data);
      localStorage.setItem("currentUser", JSON.stringify(res?.data?.user));
      setSuccessMsg("Login successful");
      window.location.href = "/";
    } catch (error) {
      console.error("There was an error logging in!", error);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient">
      <div
        className="bg-white p-5 rounded-4 shadow-lg w-100 border border-2 border-opacity-25"
        style={{ maxWidth: "420px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Welcome Back</h2>
          <p className="text-muted">Login to your account</p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email || ""}
              required
            />
            <label>Email address</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password || ""}
              required
            />
            <label>Password</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Sign In
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account? <a href="/register">Register</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
