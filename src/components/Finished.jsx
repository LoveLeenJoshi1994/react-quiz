import { useContext } from "react"
import { QuestionContext } from "./questionContext"

function Finished() {
  const { points, maxPoints,dispatch,highscore } = useContext(QuestionContext);
  const Percentage = Math.floor(points / maxPoints * 100);
  return (
    <div>
      <p className="result">
        {Percentage < 50 && "🤦🏻‍♀️"}  {Percentage > 50 && Percentage < 80 && '😊'}  {Percentage>80 && "💥" }You  Scored {points} out of {maxPoints} Points ({Percentage}%)
      </p>
      <p className="highscore"> Highscore:{highscore} Points</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"Restart"})}>Restart Quiz</button>
    </div>
  )
}

export default Finished
