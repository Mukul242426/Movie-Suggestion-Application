import React,{useEffect, useState} from 'react'
import '../Styling/SuggestedMovies.css'

function SuggestedMovies({genre,genre_id}) {

console.log(genre,genre_id);  

let [movieData,setMovieData]=useState();

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f505d443f82304654b994832b5b127eb&with_genres=${genre_id}`)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data);
    const results=data.results.slice(0,4);
    setMovieData(results)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

console.log(movieData)
  
  return (
    <div className="movies-list">
      <div className="variety">
       {genre}
      </div>
      <div className="ImageBox">
       {movieData && movieData.map((item,index)=>(
        <div key={index} className='picture'>
        <img src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} alt="default" className='suggested-movie'/>
        </div>
       ))}
      </div>
      
    </div>
  )
}

export default SuggestedMovies
