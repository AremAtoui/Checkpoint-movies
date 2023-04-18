import React from 'react';
import MoviesCard from './MoviesCard';
import AddMovies from './AddMovies';
function MoviesList({ movies, setmovies, text, rate }) {

  return (
    <div  className="IMA">
    <div className="Na" style={{marginTop: "110px"}}>
      <AddMovies movies={movies} setmovies={setmovies}/>
    </div>
    <div className="Container">
      {movies.filter((movie)=>movie.name.toLowerCase().includes(text.toLowerCase())).map((el) => <MoviesCard movie={el} />
      ).reverse()}



    </div>

<div className="IMA">
  <img  style={{borderRadius: "28px"}}src="https://yt3.ggpht.com/ytc/AGIKgqMah8wUg19UlG4kOANOClgs-VTS7GncI-45BACwmw=s48-c-k-c0x00ffffff-no-rj"/>
  <h4>
Fatma Bahri</h4>
  <p>Je viens de le voir , et je l’ai trouvé excellent! L’image , le son, l’editing, l’histoire .. m ont éblouie. </p>
  <p>Bravo à Abdelhmid, les acteurs, et toute l équipe du backstage. Bonne continuation 💙</p>
  <img style={{borderRadius: "28px"}} src="https://yt3.ggpht.com/TKPwn9s8jBaOQjH-NiQONnW4e5a1iq-z6anr_nfzjh9Q8SC-ZqfGyQcd1ipzTmXu-c-z6dsx=s48-c-k-c0x00ffffff-no-rj"/>
  <h4>Mossab Badr
</h4>
  <p>فيلم تحفة بصراحة متوقعتش يكون بالجمال ده لدرجة إني مكنتش عايزه يخلص🖤</p>
  <img  style={{borderRadius: "28px"}} src="https://yt3.ggpht.com/ytc/AGIKgqNOLZa4Y7SkQndE-wIXmYSGF4xyfeDEgy4__RBQDg=s48-c-k-c0x00ffffff-no-rj"/>
  <h4>Aya Benkhelifa</h4>
  <p>
فيلم قوة كبيرة .. عدلي مدة مخوفنيش فيلم رعب كيما خوفني هدا ...bravooo</p>
</div>


    </div>
  )
}

export default MoviesList