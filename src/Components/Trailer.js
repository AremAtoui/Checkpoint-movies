import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
function Trailer({ movies }) {
  const params = useParams();
  const movie = movies.filter((el) => el.name === params.name)[0];
  return (
  
    <div className="ALL">
      <img src={movie.posterurl}  style={{ width:" 387px" ,borderRadius:"20px"}}/>
      <h4>{movie.name}</h4>
      <p>{movie.description}</p>
      <ReactStars
        count={5}
        size={24}
        activeColor="Yellow"
        edit={false} value={movie.rating} />

    </div>
 
  )
}

export default Trailer;