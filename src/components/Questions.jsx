import { useContext } from "react"
import Option from "./Option";
import { QuestionContext } from "./questionContext"

function Questions() {
  const { questions,index } = useContext(QuestionContext);
 
 
  
  return (
    <div>
      <h4>{questions?.[index].question}</h4> 
      <div className="options">
      {
        questions[index].options.map((opt, i) =>
            <Option option={opt} key={i} indexNO={i} />
            )
        }
        </div>
    </div>
  )
}

export default Questions
