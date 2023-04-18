import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function MoviesCard({ movie }) {
  console.log(movie);
  return (
    <div>
      <Link style={{textDecoration:"none", color:"black"}} to={`/trailer/${movie.name}`}>
      <Card style={{
      width: "15rem",
        height: "545px",
        borderRadius: "47px", borderColor: "red",
      padding: "20px",
        margin: "20px"
      }}>
        <Card.Img variant="top" src={movie.posterurl} style={{
            width: "200px",
            maxWidth: "200px",
            height: "113px",
            maxHeight: "113px"}
        } />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <ReactStars
            count={5}
            size={24}
            activeColor="Yellow"
           edit={false} value={movie.rating}/>
      

        </Card.Body>
      </Card>
      </Link>
    </div>
  )
}

export default MoviesCard;