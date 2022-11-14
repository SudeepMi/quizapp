import React from "react";

const Teamform = () => {
  const [clicked, setClicked] = React.useState(false);
  console.log(clicked);
  return (
    <div className="teamform__container">
      <div className="team">
        <h3>Team form</h3>
        <div className="input">
          <label htmlFor="team name" className={`${clicked && "tr-label"}`}>
            Team Name
          </label>
          <input
            type="text"
            name="team name"
            onClick={() => setClicked(true)}
          />
        <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Teamform;
