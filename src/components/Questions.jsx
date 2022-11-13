import React, { lazy, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "axios";

const _options = ["A. ", "B. ", "C. ", "D. "];

function Questions({ mode, questionid, _revealed, _public }) {
  const [question, setQuestion] = React.useState({});
  const [revealed, setreavealed] = React.useState(_revealed || false);
  const [current, setcurrent] = React.useState(
    localStorage.getItem("current") || 0
  );
  const [animation,setAnimation] = React.useState(false)
  console.log(animation)
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const getQuestion = async () => {
    const _questions = await import(`./../questions/${mode}.json`).then(
      (res) => res.default
    );
    if (_questions[current]) {
      setQuestion(_questions[current]);
    }
    if (_questions[questionid]) {
      setQuestion(_questions[questionid]);
    }
  };

  useEffect(() => {
    getQuestion(mode);
  }, [mode, current, questionid]);

  useEffect(() => {
    setreavealed(_revealed);
  }, [_revealed]);

  const next = () => {
    setcurrent(current + 1);
    axios
      .post("https://quizapp-server-production.up.railway.app/", {
        n: current + 1,
      })
      .then((res) => console.log(res));
  };
  const handleReveal = (id) => {
    setreavealed(id);
    axios
      .post("https://quizapp-server-production.up.railway.app/reveal", {
        n: id,
      })
      .then((res) => console.log(res));
  };

  return (
    question && (
      <div className={`questions ${animation && "animation"}`}>
        <h2>{question.question}</h2>
        <div className="option_area">
          {question.option &&
            question.option.map((option, key) => (
              <p
                key={key}
                className={
                  (revealed === current && question.answer == key + 1) ||
                  (_public && revealed === questionid && question.answer == key + 1)
                    ? "correct"
                    : ""
                }
              >
                {_options[key]}
                {option}
                {question.answer == key + 1 && isLoggedIn && !_public && (
                  <i className="ri-check-double-line"></i>
                )}
              </p>
            ))}
        </div>
        {isLoggedIn && !_public && (
          <div className="buttons">
            <button onClick={() => handleReveal(current)}>Reveal Answer</button>
            <button onClick={() => {next(),setAnimation(true)}} >Next</button>
            <button>Pause Timer</button>
          </div>
        )}
      </div>
    )
  );
}

export default Questions;
