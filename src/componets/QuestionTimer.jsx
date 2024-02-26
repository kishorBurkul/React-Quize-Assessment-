import { useEffect, useState } from "react";

export default function QuestionTimer ({timeOut,onTimeout,mode}){

    const [remainingTime , setRemaningTime]= useState(timeOut)

    
    useEffect(()=>{
        console.log("Setting TimeOut")
      const timer=  setTimeout(onTimeout , timeOut);
      return ()=>{
          clearTimeout(timer)
      }  

    },[timeOut,onTimeout]);

    useEffect(()=>{
        console.log("Setting Interval")
        const interval = setInterval(() => {
            setRemaningTime((prevReamingTime => prevReamingTime -100
                ))
        }, 100);
  
        return ()=>{
             clearInterval(interval);
        }
    },[]);

    return (
        <progress id="question-time" 
        max={timeOut} 
        value={remainingTime}
        className={mode}
        />
    )
}