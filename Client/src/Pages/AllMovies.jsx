import React, { useState, useEffect } from "react";
import MovieCard from "../Component/MovieCard";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASEURL;

const AllMovies = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataFromServer = async () => {
    try {
      const res = await axios.get(`${BASEURL}/movie/fetchAllMovies`, {
        withCredentials: true,
      });
      setMovies(res.data.movies || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      getDataFromServer();
    }
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">🎬 Your Movie Collection</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading movies...</p>
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center text-muted mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No movies"
            style={{ width: "120px", opacity: 0.6 }}
          />
          <p className="mt-3 fs-5">No movies found. Start adding your favorites!</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie._id}>
              <MovieCard
                movieId={movie._id}
                title={movie.title}
                genre={movie.genre}
                director={movie.director}
                releaseYear={movie.releaseYear}
                description={movie.description}
                onDelete={getDataFromServer}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovies;
