import { useContext } from "react"
import { QuestionContext } from "./questionContext"

function Option({ option ,indexNO}) {
  const { dispatch, answer ,questions,index} = useContext(QuestionContext);
  const hasAnswer = answer !== null;
  return (
    
      <button className={`btn btn-option ${answer===indexNO?"answer":''} ${hasAnswer ? indexNO===questions[index].correctOption?"correct":"wrong":""}`}
        onClick={()=>dispatch({type:"answer",payload:indexNO})}
      disabled={hasAnswer}
    >{option}</button>
    
  )
}

export default Option;
