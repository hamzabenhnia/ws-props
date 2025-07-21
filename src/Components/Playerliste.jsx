import React from 'react'
import Players from '../Players'
import Player from './Player'
const Playerliste = () => {
  return (
    <div className='card-container'>
    {Players.map((elt) => (
  <Player key={elt.id} {...elt}/>
))}
    </div>


  )
}

export default Playerliste