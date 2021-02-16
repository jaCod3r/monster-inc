import React from 'react'
import './card.style.css'

export const Card = (props) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.data.id}?set=set2&size=200x200`} alt=""/>
    <h3>{props.data.name}</h3>
    <p>{props.data.email}</p>
  </div>
)