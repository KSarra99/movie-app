import React from 'react'
import { Card } from 'react-bootstrap';

import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
    
  let {
    Imgsrc,
    Moviename,
    Rating,
    Date,
}=movie;
return (
 <div>
  <Card className="cart" style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Imgsrc}  alt="poster"/>
  <Card.Body className="card-vibes">
    <Card.Title> <h1> {Moviename} </h1> </Card.Title>
    <Card.Text>
    <ReactStars  value={Rating} edit={false} starCount={5} size={24} activeColor="#ffd700" />
    </Card.Text>
    <Card.Text> <p> {Date} </p> </Card.Text>
  </Card.Body>
</Card> 
</div> 
)
  
}


export default MovieCard
