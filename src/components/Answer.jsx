import axios from "axios";
import React from "react";

const Answer = ({ leaders,setLeaders }) => {

  const handleDelete = (id) =>{
    axios.post("https://quizapp-server-production.up.railway.app/removeTeam",{id:id}).then(res=>setLeaders(res.data))
  }
  return (
    <div className="answerby__component">
      <h3>Answered by</h3>
      <div className="answer">
        {leaders.map((leader, i) => {
          return (
            <div className="btn-group" key={i}>
              <button>{leader.team}</button>
              <button>
                <strong>{leader.points}</strong>
              </button>
              <button onClick={()=>handleDelete(leader.id)}><i className="ri-delete-bin-line"></i></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Answer;
