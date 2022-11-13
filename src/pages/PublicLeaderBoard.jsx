import React from "react";

const PublicLeaderBoard = ({ leaders }) => {
  const rank = { 1: "1st", 2: "2nd", 3: "3rd" };

  return (
    <>
      <h3>Points Table</h3>
      <div className="leaderboards">
        {leaders.map((leader, i) => {
          return (
            <div className="profile__box" key={i}>
              <div className="imagediv">
                <img src={`https://robohash.org/${i}`} />
                {leader.rank < 4 && (
                  <p className="medal">
                    <i className="ri-award-fill"></i>
                    <span>{rank[leader.rank]}</span>
                  </p>
                )}
              </div>
              <div className="team">
                <h3>
                  <strong> {leader.team}</strong>
                </h3>
                <div className="rank">
                  <p>
                    Attempted: <strong>{leader.attemted}</strong>
                  </p>
                  <p>
                    points: <strong>{leader.points}</strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PublicLeaderBoard;
