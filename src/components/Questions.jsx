import React from "react";

function Questions({ next }) {
  return (
    <div className="questions">
      <h2>Which data structure uses FIFO techniques?</h2>
      <div className="option_area">
        <p>A. Stack</p>
        <p>B. Queue</p>
        <p>C. Circular Queue</p>
        <p>D. Linked List</p>
      </div>
      <div className="buttons">
        <button>Reveal Answer</button>
        <button onClick={() => next}>Next</button>
        <button>Pause Timer</button>
      </div>
    </div>
  );
}

export default Questions;
