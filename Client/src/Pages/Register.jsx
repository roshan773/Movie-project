import axios from 'axios';
import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const BASEURL = import.meta.env.VITE_BASEURL;

const Register = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/auth/register`, formData);
      alert("Registration successful");
      window.location.href = '/login';
    } catch (error) {
      alert("There was an error in registration!");
      console.error(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="bg-white p-5 rounded-4 shadow-lg w-100 animate__animated animate__fadeIn" style={{ maxWidth: '450px' }}>
        <div className="text-center mb-4">
          <FaUserPlus size={40} className="text-primary mb-2" />
          <h3 className="fw-bold text-primary">Create Your Account</h3>
          <p className="text-muted small">Join us to explore more features.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="floatingName"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="floatingEmail"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm">Register</button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">Already have an account? <a href="/login" className="text-primary fw-semibold">Login</a></small>
        </div>
      </div>
    </div>
  );
};

export default Register;
