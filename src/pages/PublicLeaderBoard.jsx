import React from "react";
import Loading from "../components/Loading";

const PublicLeaderBoard = ({ leaders }) => {
  const rank = { 1: "1st", 2: "2nd", 3: "3rd" };

  return (
    <div className="leaderboards__component">
      <h3>Points Table</h3>
      <Loading />
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
                    Attempted: <strong>{leader.attempted}</strong>
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
    </div>
  );
};

export default PublicLeaderBoard;
