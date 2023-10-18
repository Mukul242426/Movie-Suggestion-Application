import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../Styling/Profile.css'
import UserImage from '../images/image 15.png'
import SubWidget from '../Components/SubWidget'
import Meter from '../images/Vector (2).png'
import Droplet from '../images/Group.png'
import Wind from '../images/Vector (4).png'
import CountDown  from '../Components/CountDown'
import SetTimer from '../Components/SetTimer'

function Profile() {

  const navigate=useNavigate();

let input=localStorage.getItem("notes") ? localStorage.getItem("notes") : "";
let [notes,setNotes]=useState(input);
// console.log(notes);

let user=JSON.parse(localStorage.getItem("userDetails"));
let selectedCatgeories=JSON.parse(localStorage.getItem("categories"));
let [weatherInfo,setWeatherInfo]=useState();
let [newsInfo,setNewsInfo]=useState();
let [index,setIndex]=useState(0);
let [seconds,setSeconds]=useState(0);
let [min,setMin]=useState(0);
let [hours,setHours]=useState(0);
let [clicked,setClicked]=useState(false);
let [count,setCount]=useState(0);

const RandomIndex=()=>{
  return parseInt(Math.random()*10);
}

const handleChange=(e)=>{
  localStorage.setItem("notes",e.target.value);
  setNotes(localStorage.getItem("notes"));
}

const getWeatherInfo=()=>{
  fetch("https://api.weatherapi.com/v1/current.json?key=54c1526b0211468e812153812230610&q=Ghaziabad")
  .then((res)=>res.json())
  .then((data)=>{
    setWeatherInfo(data);
  })
  .catch((err)=>{
    console.log(err.message);
  })
}

const getNewsInfo=()=>{
  fetch("https://newsdata.io/api/1/news?apikey=pub_3088039b074803c25ab690b2911ce8af36d33&q=top%20headlines ")
  .then((res)=>res.json())
  .then((data)=>{
    setNewsInfo(data.results);
    console.log(data);
  })
  .catch((err)=>{
    console.log(err.message);
  })

}

useEffect(()=>{
  getWeatherInfo();
  getNewsInfo();
  let temp=RandomIndex();
   setIndex(temp);
},[])

// console.log(newsInfo)



const date=new Date();

const month=date.getMonth()+1;
const day=date.getDate();
const year=date.getFullYear();
const current_date=`${month}-${day}-${year}`;

let hour =date.getHours();
let minute=date.getMinutes();
if(minute<10)
{
  minute='0'+ minute.toString();
}
let meridien="";
if(hour>12)
{
  hour=hour%12;
  meridien="PM";
}
else
{
  meridien="AM";
}
const current_time=`${hour}:${minute} ${meridien}`

  return (
    <div className='profile-page'>
    <div className='part-left'>
    <div className='upper-area'>
      <div className='section-one'>
        <div className='user-info'>
          <div className='PicArea'>
            <img src={UserImage} className='UserPic'  alt="default"/>
           
          </div>
          <div className='UserDetails'>
            <div className='Complete-Info'>
           <div className='fullname'>
            {user.name}
           </div>
           <div className='UserEmail'>
            {user.email}
           </div>
           <div className='UserName'>
           {user.username}
           </div>
           </div>
           <div className='categories'>
            {selectedCatgeories.map((item,index)=>(
              <SubWidget key={index} category={item}/>
            ))}
          </div>
      
          </div>

        </div>
        <div className='weather-details'>
         <div className='location-info'>
          <div className='date'>
           {current_date}
          </div>
          <div className='time'>
          {current_time}
          </div>
         </div>
         <div className='climate-info'>
         <div className='climate-type'>
         <div className='climate-pitcha'>
         <img src={weatherInfo && weatherInfo.current.condition.icon} alt="default" style={{width:'100%',height:'100%'}}/>
         </div>
         <div className='text-climate'>
         {weatherInfo && weatherInfo.current.condition.text}
         </div>
         </div>
         <div className='vertical-line'>
         </div>
         <div className='temperature'>
          <div className='degree'>
          {weatherInfo && `${weatherInfo.current.temp_c}°C`}
          </div>
          <div className='pressure'>
           <div className='photo'>
            <img src={Meter} alt="default" className='meter'/>
           </div>
           <div className='pressure-content'>
           {weatherInfo && `${weatherInfo.current.pressure_mb}mbar Pressure`}
           </div>
          </div>
         </div>
         <div className='vertical-line'>
         </div>
         <div className='wind-humidity'>
         <div className='air-info'>
         <div className='air-photo' alt="default">
         <img src={Wind} alt="default" style={{width:'30px',height:'20px'}}/>
         </div>
         <div className='air-content'>
         {weatherInfo && `${weatherInfo.current.wind_kph} km/h Wind`}
         </div>
         </div>
         <div className='humid-info'>
          <div className='humid-photo'>
          <img src={Droplet} alt="default" style={{width:'15px',height:'20px'}}/>
          </div>
          <div className='humid-content'>
          {weatherInfo && `${weatherInfo.current.humidity}% Humidity`}
          </div>

         </div>
         </div>

         </div>
        </div>

      </div>
      <div className='section-two'>
       <div className='text-title'>
       All notes
       </div>
       <textarea className='text-area' value={notes} onChange={handleChange}/>
      </div>

    </div>
    <div className='lower-area'>
    <div className='lowerArea-part1'>
     <CountDown hours={hours} setHours={setHours} min={min} setMin={setMin} seconds={seconds} setSeconds={setSeconds} clicked={clicked} setClicked={setClicked} setCount={setCount}/>
    </div>
    <div className='lowerArea-part2'>
     <SetTimer seconds={seconds} setSeconds={setSeconds} min={min} setMin={setMin} hours={hours} setHours={setHours}
     clicked={clicked} setClicked={setClicked} count={count} setCount={setCount}/>
    </div>
    </div>
    </div>
    <div className='part-right'>
      <div className='news-part'>
     <div className='upwards'>
     <img src={newsInfo && newsInfo[index].image_url} alt="default" style={{width:'100%',height:'100%'}}/>
     <div className='news-title'>
     <h4 className='news-heading'>{newsInfo && newsInfo[index].title}</h4>
     <h5>{current_date} | {current_time}</h5>
     </div>
     </div>
     <div className='downwards'>
     {newsInfo && newsInfo[index].content}
     </div>
    </div>
    <div className='browse-btn'>
      <button className='graze-btn' onClick={()=>navigate("/browse")}>Browse</button>
    </div>
    </div>
    </div>
  )
}

export default Profile
