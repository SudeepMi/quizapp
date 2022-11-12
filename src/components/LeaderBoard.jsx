import React from "react";

function LeaderBoard() {
  return (
    <div className="leaderboards">
      <div className="profile__box">
        <img src={`https://robohash.org/1`} />
        <div className="team">
          <h3>Team A</h3>
          <div className="rank">
            <p>Attempted 20</p>
            <p>Team Rank:- 1st</p>
          </div>
        </div>
        <p className="position">1st</p>
      </div>
    </div>
  );
}

export default LeaderBoard;
