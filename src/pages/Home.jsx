import React from "react";
import LeaderBoard from "../components/LeaderBoard";
import Questions from "../components/Questions";
import UserProfile from "../components/UserProfile";
import Teamform from "../components/Teamform";
import "./home.css";
import Progressbar from "../components/Progressbar";
import Answer from "../components/Answer";

function Home({ leaders, setLeaders }) {
  return (
    <div className="home_wrapper">
      <UserProfile />
      <Questions mode={"optionBased"} />
      <LeaderBoard leaders={leaders} />
      <Progressbar />
      <Answer leaders={leaders} />
      <Teamform setLeaders={setLeaders} />
    </div>
  );
}

export default Home;
