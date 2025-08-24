import axios from 'axios';
import React, { useState } from 'react';

const BASEURL = import.meta.env.VITE_BASEURL;

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASEURL}/movie/create`, formData, { withCredentials: true });
      alert("🎬 Movie created successfully!");
      setFormData({
        title: "",
        genre: "",
        director: "",
        releaseYear: "",
        description: ""
      });
    } catch (err) {
      alert("❌ Error creating movie data!");
      console.error(err);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">Add New Movie</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Movie Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter movie title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="e.g., Action, Drama"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Director</label>
                  <input
                    type="text"
                    className="form-control"
                    name="director"
                    value={formData.director}
                    onChange={handleChange}
                    placeholder="Director's name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Release Year</label>
                  <input
                    type="number"
                    className="form-control"
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleChange}
                    placeholder="e.g., 2024"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Short description about the movie"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100 fw-semibold">
                  <i className="bi bi-plus-circle me-2"></i>Add Movie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
