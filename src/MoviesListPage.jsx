import React from 'react'
import MovieCard from './MovieCard';
import { movies } from './data';


export default function MoviesListPage() {
  const movieCards = movies.map((movie, idx) => <MovieCard movie={movie} key={idx} />)
  
  return (
    <div className='container'>
      {movieCards}
    </div>
  )
}
