import React from 'react'
import '../Styling/Widget.css'

function Widget({genre,selectedGenre,setSelectedGenre}) {

  const handleGenre=(clicked)=>{
    if(genre!==clicked)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  const handleRemove=()=>{
    let updated_array=selectedGenre.filter((clicked)=>handleGenre(clicked));
    setSelectedGenre(updated_array);
  }

  return (
    <div className='widget'>
    <div className='texting'>{genre}</div>
    <div className='remove-tab' onClick={handleRemove}>X</div>
    </div>
  )
}
 
export default Widget
