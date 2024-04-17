import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FlowerCard.module.scss'

const FlowerCard = ( {flower} ) => {
    console.log(flower)
  return (
    <article>
        <h2>{flower.name}</h2>
        <img src={flower.imageLink} alt={flower.name} />
        <p>Starting from: ${flower.size.small.price} AUD</p>
        <p>Description: {flower.description}</p>
        <Link to ={flower.id}>More Info</Link>
        <button>Add to Cart</button>
    </article>
  )
}

export default FlowerCard