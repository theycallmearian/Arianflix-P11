import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchMovieDetail } from '../../api/api';
import Loader from '../common/Loader';
import '../../assets/styles/Detail.css';

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDetail() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMovieDetail(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadDetail();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="error text-center">Error: {error}</p>;
  if (!movie) return null;

  return (
    <main className="detail-container">
      <div className="detail-card">
        <div className="detail-image-wrapper">
          {movie.Poster && movie.Poster !== 'N/A' ? (
            <img
              src={movie.Poster}
              alt={`Póster de ${movie.Title}`}
              className="detail-poster"
            />
          ) : (
            <div className="detail-no-image">Sin imagen</div>
          )}
        </div>
        <div className="detail-info">
          <h2 className="detail-title">
            {movie.Title} <span>({movie.Year})</span>
          </h2>
          <p><strong>Género:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actores:</strong> {movie.Actors}</p>
          <p><strong>Duración:</strong> {movie.Runtime}</p>
          <p><strong>Clasificación:</strong> {movie.Rated}</p>
          <p><strong>Resumen:</strong> <br />{movie.Plot}</p>
          <p><strong>Idioma:</strong> {movie.Language}</p>
          <p><strong>Puntuación IMDb:</strong> {movie.imdbRating}</p>
          <Link to="/" className="button-back">← Volver al inicio</Link>
        </div>
      </div>
    </main>
  );
}
