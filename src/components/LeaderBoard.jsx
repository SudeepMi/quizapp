import React from "react";

function LeaderBoard() {
  const leaders = [
    { team: "Team A", attemted: "20", points: 10 },
    { team: "Team B", attemted: "10", points: 10 },
  ];

  return (
    <div className="leaderboards">
      {leaders.map((leader, i) => {
        return (
          <div className="profile__box">
            <img src={`https://robohash.org/1`} />
            <div className="team">
              <h3>{leader.team}</h3>
              <div className="rank">
                <p>Attempted: {leader.attemted}</p>
                <p>points: {leader.points} </p>
              </div>
            </div>
            <p className="position">1st</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoard;
