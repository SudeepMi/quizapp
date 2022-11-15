import axios from "axios";
import React from "react";

const Teamform = ({ setLeaders }) => {
  // const [clicked, setClicked] = React.useState(false);
  const [TeamName, setTeamName] = React.useState("");
  const handleSubmit = () => {
    if (TeamName !== "") {
      axios
        .post("https://quizapp-server-production.up.railway.app/addTeam", {
          name: TeamName,
        })
        .then((res) => {
          setTeamName("");
          setLeaders(res.data);
        });
    }
  };
  return (
    <div className="teamform__container">
      <div className="team">
        <h3>Team form</h3>
        <div className="input">
          <input
            type="text"
            name="team name"
            value={TeamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <label htmlFor="team name">Team Name</label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Teamform;
