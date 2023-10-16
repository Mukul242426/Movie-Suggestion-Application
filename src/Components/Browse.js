import React from 'react'
import {useNavigate} from 'react-router-dom'
import icon from '../images/icon.png'
import '../Styling/Browse.css'
import SuggestedMovies from '../Components/SuggestedMovies';

function Browse() {

const navigate=useNavigate();  

const values={
  "Action":28,
  "Drama":18,
  "Romance":10749,
  "Thriller":53,
  "Western":37,
  "Horror":27,
  "Fantasy":14,
  "Music":10402,
  "Fiction":878
}

const selectedGenre=JSON.parse(localStorage.getItem("categories"));
// console.log(selectedGenre)



  return (
    <>
    <div className='browse'>
    <div className='final-heading'>
    <div className='superApp'>
    Super App
    </div>
    <div className='switch-icon' onClick={()=>navigate("/profile")}>
    <img src={icon} alt="icon" style={{width:'55px',height:'55px'}}/>
    </div>
    </div>
    <div className='entertainment'>
    Entertainment according to your choice
    </div>
    <div className='checkout-movies'>
      {selectedGenre.map((genre,index)=>(
        <SuggestedMovies key={index} genre={genre} genre_id={values[genre]}/>
      ))}
    </div>
    </div>
    </>
  )
}

export default Browse
