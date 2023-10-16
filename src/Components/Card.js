import React,{useEffect} from 'react'
import '../Styling/Card.css'

function Card({item,setErrorMsg,selectedGenre,setSelectedGenre}) {

  const handleClick=()=>{
    
    if(!selectedGenre.includes(item.name))
    {
      setSelectedGenre([...selectedGenre,item.name]);
    }
}

  useEffect(()=>{

    if(selectedGenre.length>=3)
    {
      setErrorMsg("");
    }
  },[selectedGenre])


  return (
    <div className='box' 
    style={{ backgroundColor:item.Color,
             border:selectedGenre.includes(item.name)?'8px solid green':'transparent',
             width:selectedGenre.includes(item.name)?'168px':'155px',
             height:selectedGenre.includes(item.name)?'161px':'151px'}} onClick={handleClick}>
        <div className='genre-type'
         style={{backgroundColor:item.Color}}>
         {item.name}
        </div>
        <div className='pic' style={{backgroundColor:item.Color}}>
         <img src={item.imageUrl} alt="movie" className='movie-type' style={{backgroundColor:item.Color}}/>
        </div>
    </div>
  )
}

export default Card
