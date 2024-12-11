import { useContext, useEffect } from "react"
import Finished from "./Finished";
import { QuestionContext } from "./questionContext"

function Timer() {
  const { time, dispatch } = useContext(QuestionContext);
  console.log(time)
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  useEffect(function () {
    const id= setInterval(() => {
      dispatch({type:"timer"})
    }, 1000)
    return()=>clearInterval(id)
  }, [dispatch])
  
  if(time>=0)
  
  return (
    <div className="timer">
      {min < 10 && "0"}{min}:{sec < 10 && "0"}{sec}
    </div>
  )
}

export default Timer
