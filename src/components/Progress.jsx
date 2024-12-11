import { useContext } from "react"
import { QuestionContext } from "./questionContext"

function Progress() {
  const{index,maxQuestions,maxPoints,points,answer}=useContext(QuestionContext)
  
  return (
    <header className="progress">
      <progress min={0} max={maxQuestions} value={ `${index+Number(answer!==null)}`} />
      <p>Question <strong> {index + 1} / {maxQuestions}</strong></p>
      <p><strong>{points }/{maxPoints }</strong></p>
    </header>
  )
}

export default Progress
