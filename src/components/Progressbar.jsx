import React from "react";

const Progressbar = () => {
  const [clicked,setClicked] = React.useState(false)
  console.log(clicked);
  return (
    <div className={`progressbar ${clicked && "animation"}`}>
      <div className={`rapidfire ${clicked && "animation"}`} onClick={() => setClicked(true)}><p>Rapid Fire</p></div>
      <div className={`optionbased `} onClick={() => setClicked(true)}><p>Question Based</p></div>
      <div className="questionare"><p>Questionare</p></div>
      <div className="code_competition"><p>Code Competition</p></div>
    </div>
  );
};

export default Progressbar;
