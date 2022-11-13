import React,{lazy, useEffect} from "react";
import Pusher from "pusher-js"
import axios from "axios";

const _options = ["A. ","B. ","C. ","D. "];

function Questions({mode,questionid}) {

  const [question,setQuestion] = React.useState({})
  const [current, setcurrent] = React.useState(localStorage.getItem("current") || 0);

  const getQuestion = async () =>{
    const _questions = (await import(`./../questions/${mode}.json`).then(res=> res.default))
    if(_questions[current]){
      setQuestion(_questions[current])
    }
    if(_questions[questionid]){
      setQuestion(_questions[questionid])
    }
  }

  useEffect(() => {
    getQuestion(mode)
  }, [mode,current,questionid])
  
  const next = () =>{
    setcurrent(current+1)
    axios.post("https://quizapp-server-production.up.railway.app/",{n:current+1}).then(res=>console.log(res))
  }
  return (
    question &&
    <div className="questions">
      <h2>{question.question}</h2>
      <div className="option_area">
       {question.option && question.option.map((option,key)=><p key={key}>{_options[key]}{option}</p>)}
      </div>
      <div className="buttons">
        <button>Reveal Answer</button>
        <button onClick={() => next()}>Next</button>
        <button>Pause Timer</button>
      </div>
    </div> 
  );
}

export default Questions;
