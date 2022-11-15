import React from "react";

const Progressbar = (id) => {
  const [clicked, setClicked] = React.useState({});

  const changeColor = (id) => {
    setClicked({ ...clicked, [id]: !clicked[id] });
  };

  return (
    <div className={`progressbar ${clicked && "animation"}`}>
      <span className={`${clicked[1] && "animation"}`}></span>
      <span className={`${clicked[2] && "animation1"}`}></span>
      <span className={`${clicked[3] && "animation2"}`}></span>
      <div className="rapidfire">
        <p>Rapid Fire</p>
      </div>
      <div
        className={`optionbased ${clicked[1] && "animation"}`}
        onClick={() => changeColor(1)}
      >
        <p>Question Based</p>
      </div>
      <div
        className={`questionare ${clicked[2] && "animation"}`}
        onClick={() => changeColor(2)}
      >
        <p>Questionare</p>
      </div>
      <div
        className={`code_competition ${clicked[3] && "animation"}`}
        onClick={() => changeColor(3)}
      >
        <p>Code Competition</p>
      </div>
    </div>
  );
};

export default Progressbar;
