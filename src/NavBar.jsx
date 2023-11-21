import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ user }) {
  return (
    <nav className='flex-container'>
        <Link className='flex-item' to='/'>Movies List</Link>
        &nbsp; | &nbsp;
        <Link className='flex-item' to='/actors'>Actors List</Link>
        <p className='flex-item'>welcome { user }!</p>
    </nav>
  )
}
