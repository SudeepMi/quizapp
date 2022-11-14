import React from "react";

const Teamform = () => {
  return (
    <div className="teamform__container">
      <div className="team">
        <h3>Team form</h3>
        <div className="input">
          <input type="text" name="team name" />
          <label htmlFor="team name">Team Name</label>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Teamform;
