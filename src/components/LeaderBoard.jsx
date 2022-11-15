import React from "react";

function LeaderBoard({ leaders }) {
  const rank = { 1: "1st", 2: "2nd", 3: "3rd" };

  {
    return leaders.length >= 1 ? (
      <div className="leaderboards">
        {leaders.map((leader, i) => {
          return (
            <div className="profile__box" key={i}>
              <img src={`https://robohash.org/${i}`} />
              <div className="team">
                <h3>{leader.team}</h3>
                <div className="rank">
                  <p>Attempted: {leader.attempted}</p>
                  <p>points: {leader.points} </p>
                </div>
              </div>
              <p className={`position color-${leader.rank}`}>
                {rank[leader.rank]}
              </p>
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <h3>No team available ...please fill a form to participate</h3>
      </div>
    );
  }
}

export default LeaderBoard;
