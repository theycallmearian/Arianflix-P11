import React from 'react';
import '../../assets/styles/Card.css';

export default function Card({ title, year, poster, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {poster && poster !== 'N/A' ? (
        <img src={poster} alt={`Póster de ${title}`} className="card-image" />
      ) : (
        <div className="card-no-image">Sin imagen</div>
      )}
      <div className="card-overlay">
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
}
