import { createContext ,useReducer,useEffect} from "react";
const TIME_PER_QUES = 30;

const initialState = {
  questions: [],
  //loading active ready finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  time: null
  
} 
function reducer(state, action) {
  switch (action.type) {
     case "data/fetched":
      return{...state,questions:action.payload,status:"ready"}
    case "data/error":
      return { ...state, status: "error" }
    case "data/active":
      return { ...state, status: "active",time:TIME_PER_QUES*state.questions.length-1 }
    case "answer":
      const curQuestions = state.questions[state.index];
      
      return { ...state, answer: action.payload ,points:curQuestions.correctOption===action.payload?state.points+curQuestions.points:state.points}
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finishedQuiz":
      
      return { ...state, status: "finished" ,highscore:state.points>state.highscore?state.points:state.highscore};
    case "Restart":
      return { ...state, status: "ready" };
    case "timer":
      return {...state,time:state.time-1,status:state.time===0?"finished":state.status}
    default:
      return state;
  }
}


const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [{ time,status, questions,index,answer,points ,highscore}, dispatch] = useReducer(reducer, initialState);
  const maxQuestions = questions?.length;
  const maxPoints=questions.reduce((acc,cur)=>acc+cur.points,0)
  useEffect(function () {
    async function fetchQuestions() {
      try {
       const res = await fetch("http://localhost:5000/questions");
        const data = await res.json();
        dispatch({ type: "data/fetched", payload: data })
      console.log(questions)
      }
      catch (err) {
        dispatch({type:"data/error"})
      }
    }
    fetchQuestions();
  },[])
  return (
    <QuestionContext.Provider
      value={{time,highscore,points, maxPoints,answer,index,status,  dispatch ,maxQuestions,questions}}>
      {children}
    </QuestionContext.Provider>
  )
}
export {QuestionContext,QuestionProvider};