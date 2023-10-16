import React from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import '../Styling/CountDown.css'
import radarAudio from '../audio/radar_ios_7.mp3'

function CountDown({hours,setHours,min,setMin,seconds,setSeconds,clicked,setClicked,setCount}) {

  let alarm=new Audio(radarAudio);

  const handleComplete=()=>{
    setHours(0);
    setMin(0);
    setSeconds(0);
    setCount(0);
    setClicked(!clicked);
    alarm.play();
    
  }

   const time=(hours*3600)+(min*60)+seconds;

   const getHours=(remainingTime)=>{
    return parseInt(remainingTime/3600);
   }

   const getMins=(remainingTime)=>{
    return parseInt((remainingTime%3600)/60);
   }

   const getSeconds=(remainingTime)=>{
    return remainingTime%60;
   }

   const formatting=(currentTime)=>{
    if(currentTime<10)
    {
      return `0${currentTime}`;
    }
    else
    {
      return currentTime;
    }
   }


  return (
    <div>
      <CountdownCircleTimer
      isPlaying={clicked}
      key={time}
      duration={time}
      strokeWidth={8}
      size={220}
      colors='#FF6A6A'
      rotation='counterClockwise'
      onComplete={handleComplete}
      >
      {({remainingTime})=>(
        <div className='countdown-start'>
          {`${formatting(getHours(remainingTime))}:${formatting(getMins(remainingTime))}:${formatting(getSeconds(remainingTime))}`}
        </div>
      )}
      </CountdownCircleTimer>
    </div>
  )
}

export default CountDown
