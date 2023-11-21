import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieCard({ movie }) {
  const { posterPath, title, releaseDate } = movie;

  return (
    <Link to={`/movies/${title}`} className="movie-link">
      <img src={posterPath} alt={title} />
      <div className='title'>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </Link>
  );
}
