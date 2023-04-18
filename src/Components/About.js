import Carousel from 'react-bootstrap/Carousel';
import './about.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
 

  return (
    <div >

      <img className="Big" src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600" style={{
        width: "1315px",
        height: "492px"
      }} />
      {/* https://media.istockphoto.com/id/1409271522/fr/photo/les-mains-de-lhomme-tiennent-du-noir-avec-un-plateau-de-clapper-jaune-ou-de-lardoise-de.jpg?b=1&s=170667a&w=0&k=20&c=aynmsd89uOvekmlZsXIFFN9aE3-alyTlzcI0tR5ehLI= */}

      <div className="Naa">
        <h3>Movies</h3>
        <p>I don't know about other people, but I watch movies because it is fun to immerse myself in a fantasy. I listen to music because it occupies some portions of my mind and makes it easier to focus on things, and also because music is fun. I play video games because in them I can become someone other than myself, and do things I can't do in real life...</p>
        <Button variant="outline-success" style={{ backgroundColor: " rgb(116 104 104)", color: "black", border: "red" }}>Movie</Button>
       
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.insider.com/5eb1c74ee3c3fb191941a158?width=1000&format=jpeg&auto=webp"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDazfGABEDti9O94BeZM96B7qCEVRkn_W9og&usqp=CAU"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/Forgotten-Fantasy-Movies-Title.jpg"
          />


        </Carousel.Item>
      </Carousel>
      <div className="video">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/HqWG7oROgaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="Type">
        <h4>The Basic Film Genres</h4>
        <ul>
          <li>Action.</li>
          <li>Comedy.</li>
          <li>Drama.</li>
          <li>Romance...</li>
        </ul>
      </div>
      {/* <h1>{handlealert}</h1>
      <button onClick={() => handlealert("Comment-allez vous ?")}> All action </button>
 */}





    </div>
  )
}

export default About;
