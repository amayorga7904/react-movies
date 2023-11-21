import './MovieDetailPage.css'
import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const selectedMovie = movies.find((movie) => movie.title === movieName);

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const { title, releaseDate, posterPath, cast } = selectedMovie;

  return (
    <div className='flex'>
      <h2>{title}</h2>
      <img src={posterPath} alt={title} />
      <p>Release Date: {releaseDate}</p>
      <div>
        <h3>Cast:</h3>
        <p>{cast.join(', ')}</p>
      </div>
    </div>
  );
}
