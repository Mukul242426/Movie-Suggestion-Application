import React,{useState} from 'react'
import '../Styling/Home.css'
import Card from './Card'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'
import image4 from '../images/image 4.png'
import image6 from '../images/image 6.png'
import image7 from '../images/image 7.png'
import image8 from '../images/image 8.png'
import image9 from '../images/image 9.png'
import image10 from '../images/image 10.png'
import image11 from '../images/image 11.png'
import alert from '../images/Vector.svg'
import Widget from './Widget'
import {useNavigate } from 'react-router-dom'


function Home() {


const navigate=useNavigate();

  let details=[
    {id:1,name:"Action",Color:"#FF5209",imageUrl:image2,},
    {id:2,name:"Drama",Color:"#D7A4FF",imageUrl:image3,},
    {id:3,name:"Romance",Color:"#148A08",imageUrl:image4,},
    {id:4,name:"Thriller",Color:"#84C2FF",imageUrl:image6,},
    {id:5,name:"Western",Color:"#902500",imageUrl:image7,},
    {id:6,name:"Horror",Color:"#7358FF",imageUrl:image8,},
    {id:7,name:"Fantasy",Color:"#FF4ADE",imageUrl:image9,},
    {id:8,name:"Music",Color:"#E61E32",imageUrl:image10,},
    {id:9,name:"Fiction",Color:"#6CD061",imageUrl:image11,},
];
let [errorMsg,setErrorMsg]=useState("");

let [selectedGenre,setSelectedGenre]=useState([]);


const handleSubmit=()=>{
  if(selectedGenre.length<3)
  {
    setErrorMsg("Minimum 3 category required")
  }
  else
  {
    setErrorMsg("");
    localStorage.setItem("categories",JSON.stringify(selectedGenre));
    navigate("/profile");
  }

}


  return (
    <div className='home'>
      <div className='left'>
        <div className='app-name'>
        Super App
        </div>
        <div className='some-content'>
         Choose your entertainment category
        </div>
        <div className='choices-display'>
          {selectedGenre.map((genre,index)=>(
            <Widget key={index} genre={genre} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    
          ))}
        </div>
        <div className="mistakes">
          {errorMsg.length>0?(<img src={alert} className='warning-icon' alt="danger"/>):""}
          <div className='error-msg'>
          {errorMsg}
        </div>
        </div>

      </div>
      <div className='right'>
        {details.map((item)=>(
          <Card key={item.id} ItemId={item.id} item={item} setErrorMsg={setErrorMsg} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
        ))}
        </div>
        <button className='next-btn' onClick={handleSubmit}>Next Page</button>
    </div>
  )
}

export default Home
