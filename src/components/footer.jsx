import { useContext } from "react"
import { QuestionContext } from "./questionContext"

function Footer() {
  const { answer ,dispatch,index} = useContext(QuestionContext);
  
  
  if (answer === null) return;

 if(index<14)
  return (
    <footer>
      
      <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
    </footer>
  )
  if(index===14)
  return (
    <footer>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"finishedQuiz"})}>Finish</button>
    </footer>
  )
  
}

export default Footer
