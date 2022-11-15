import axios from "axios";
import React from "react";
import getTeamRank from "../utils/getTeamRank";

const Answer = ({ leaders, setLeaders }) => {
  const point = 2;
  const handleDelete = (id) => {
    axios
      .post("https://quizapp-server-production.up.railway.app/removeTeam", {
        id: id,
      })
      .then((res) => setLeaders(res.data));
  };
  const addPoint = (id) => {
    let _leaders = leaders;
    _leaders = _leaders.map((l) => {
      if (l.id == id) {
        l.points += point;
        l.attempted +=1;
      }
      return l;
    });
    _leaders = _leaders.sort((a, b) => {
      return b.points - a.points;
    });
    _leaders = getTeamRank(_leaders)
    setLeaders(_leaders)
  };
  return (
    <div className="answerby__component">
      <h3>Answered by</h3>
      <div className="answer">
        {leaders.map((leader, i) => {
          return (
            <div className="btn-group" key={i}>
              <button>{leader.team}</button>
              <button onClick={() => addPoint(leader.id)}>
                <strong>{leader.points}</strong>
              </button>
              <button onClick={() => handleDelete(leader.id)}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Answer;
