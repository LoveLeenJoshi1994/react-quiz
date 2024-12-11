import { useContext } from "react";

import { QuestionContext,QuestionProvider } from "./questionContext";

//files
import Header from "./Header";
import Main from "./main";
import GettingStarted from "./gettingStarted";
import Loader from "./Loader";
import Error from "./Error";
import Questions from "./Questions";
//styles
import "../index.css";
import Footer from "./footer";
import Progress from "./Progress";
import Finished from "./Finished";
import Timer from "./Timer";



 


function App() {
  const {status,time} = useContext(QuestionContext);
  
  return (
      
    <div className="app">
      <Header />

      <Main>
        {status==="loading" && <Loader/>}
        {status === "ready" && <GettingStarted />}
        {status === "error" && <Error />}
        {status === "active" &&
          <>
          <Progress/>
          <Questions />
          <Timer/>
          <Footer/>
        </>
        }
        {status === "finished" && <Finished />}
        
      </Main>
      
    </div>
      
  )
}

export default App;
