import React from 'react';
import { movies } from './data';
import ActorCard from './ActorCard';
import './ActorListPage.css'

export default function ActorListPage() {
  const uniqueActors = [...new Set(movies.flatMap(movie => movie.cast))];

  const actorCards = uniqueActors.map((actor, idx) => (
    <ActorCard actor={actor} key={idx} />
  ));

  return (
    <div className='container'>
      {actorCards}
    </div>
    )
}
