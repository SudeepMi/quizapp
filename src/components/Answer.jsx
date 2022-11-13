import React from "react";

const Answer = ({ leaders }) => {
  return (
    <div className="answerby__component">
      <h3>Answered by</h3>
      <div className="answer">
        {leaders.map((leader, i) => {
          return (
            <div className="btn-group" key={i}>
              <button>{leader.team}</button>
              <button>
                <strong>{leader.points}</strong>{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Answer;
