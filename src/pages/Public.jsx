import React from "react";
import Questions from "../components/Questions";
import Pusher from "pusher-js";
import PublicLeaderBoard from "./PublicLeaderBoard";
import "./public.css"

const Public = ({ leaders }) => {
  const [questionid, setquestionid] = React.useState(0);
  const [revealed, setreavealed] = React.useState(false);
  const [_leaders,_setLeaders] = React.useState(leaders);

  React.useEffect(() => {
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;
    const pusher = new Pusher("2142cda6d39765cba2a9", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("main");
    channel.bind("current", function (data) {
      setquestionid(data.questionId);
      setreavealed(false);
    });
    channel.bind("reveal", function (data) {
      setreavealed(data.questionId);
    });
    channel.bind("team_added", function (data) {
      _setLeaders([..._leaders,data.team]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  return (
    <div className="public__wrapper">
      <Questions
        mode={"optionBased"}
        questionid={questionid}
        _public={true}
        _revealed={revealed}
      />
      <PublicLeaderBoard leaders={_leaders} />
    </div>
  );
};

export default Public;
