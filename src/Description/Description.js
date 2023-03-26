import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Description({movie}) {
  return (
    
    <div>
          {['Light'].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>{movie && movie.title}</Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  ))}
  <Link to='/'>Home</Link>
    </div>
  )
}

export default Description