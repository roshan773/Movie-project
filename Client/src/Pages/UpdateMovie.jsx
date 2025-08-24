import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

const BASEURL = import.meta.env.VITE_BASEURL;

const UpdateMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    } else {
      const fetchMovie = async () => {
        try {
          const res = await axios.get(`${BASEURL}/movie/getMovie/${movieId}`, {
            withCredentials: true,
          });
          setFormData(res.data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch movie details");
        }
      };

      fetchMovie();
    }
  }, [movieId, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.put(`${BASEURL}/movie/updateMovie/${movieId}`, formData, {
        withCredentials: true,
      });
      setSuccessMsg("Movie updated successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Update Movie</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="director">
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="releaseYear">
          <Form.Label>Release Year</Form.Label>
          <Form.Control
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Movie"}
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateMovie;
