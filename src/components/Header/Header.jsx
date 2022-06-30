import React from 'react'
import bg from '../../assets/bgOne.png'
import './Header.css'

export default function Header() {
  return (
    <section className='main-section'>
      <h1  >Welcome To Tarantino Movies</h1>
      <img  src={bg} alt="" />
    </section>
  )
}
