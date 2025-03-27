import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form className="add-movie-form">
        <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} required />
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={movie.releaseYear} onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" value={movie.synopsis} onChange={handleChange} required />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" value={movie.posterUrl} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
