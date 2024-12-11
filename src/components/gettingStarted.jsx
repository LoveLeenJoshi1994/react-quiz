import { useContext } from "react";
import { QuestionContext } from "./questionContext";

function GettingStarted() {
  const { maxQuestions,dispatch } = useContext(QuestionContext);
  return (
    <main className="main">
       <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{maxQuestions} Questions to test React Mastery</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"data/active"})}>Let's Start</button>
    </div>
   </main>
  )
 }
 
export default GettingStarted;
 