import React from 'react'
import '../Styling/SetTimer.css'
import Upwards from '../images/Upwards.png'
import Down from '../images/Down.png'

function SetTimer({seconds,setSeconds,min,setMin,hours,setHours,clicked,setClicked,count,setCount}) {

  const handleClick=()=>{
    setClicked(!clicked);
    setCount(count+1);
  }

  return (
    <div className='timer-box'>
      <div className='timer-content'>
       <div className='duration-text'>
       <div className='textrow'>
       Hours
       </div>
       <div className='textrow' id="minutes">
       Minutes
       </div>
       <div className='textrow'>
       Seconds
       </div>

       </div>
       <div className='increment-btn'>
        <div className='btn-row' onClick={()=>setHours(hours+1)}>
        <img src={Upwards} alt="default"/>
        </div>
        <div className='btn-row' onClick={()=>setMin(min+1)}>
        <img src={Upwards} alt="default"/>
        </div>
        <div className='btn-row' onClick={()=>setSeconds(seconds+1)}>
        <img src={Upwards} alt="default"/>
        </div>
       </div>
       <div className='time-start'>
        <div className='value-1'>
        {hours<10 ? `0${hours}`: hours}
        </div>
        <div className='colon'>:</div>
        <div className='value-2'>
        {min<10 ? `0${min}`: min} 
        </div>
        <div className='colon'>:</div>
        <div className='value-3'>
        {seconds<10 ? `0${seconds}`: seconds}
        </div>
       </div>
       <div className='decrement-btn'>
       <div className='btn-row' onClick={()=>setHours(hours>0 ? (hours-1) : hours)}>
        <img src={Down} alt="default"/>
        </div>
        <div className='btn-row' onClick={()=>setMin(min>0 ? (min-1) : min)}>
        <img src={Down} alt="default"/>
        </div>
        <div className='btn-row' onClick={()=>setSeconds(seconds>0 ? (seconds-1) : 0)}>
        <img src={Down} alt="default"/>
        </div>
       </div>
      </div>
      <div className='timer-btn'>
       <button className='stopwatch-start-stop' disabled={(hours===0 && min===0 && seconds===0)? true : false}
        style={hours===0 && min===0 && seconds===0 ? {cursor:'default'}: {cursor:'pointer'}} onClick={handleClick}>{count%2===0?'Start':'Stop'}</button>
      </div>
    </div>
  )
}

export default SetTimer
