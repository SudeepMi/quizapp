import React from "react";

const Progressbar = (id) => {
  const [clicked,setClicked] = React.useState({})

  console.log(clicked)

  const changeColor = (id) => {
      setClicked({...clicked,[id]:!clicked[id]})
  }

  return (
    <div className={`progressbar ${clicked && "animation"}`}>
      <span className={`${clicked[1] && "animation"}`}></span>
      <span className={`${clicked[2] && "animation1"}`}></span>
      <span className={`${clicked[3] && "animation2"}`}></span>
      <div className="rapidfire"><p>Rapid Fire</p></div>
      <div className={`optionbased `} onClick={() => changeColor(1)}><p>Question Based</p></div>
      <div className={`questionare`} onClick= {() => changeColor(2)}><p>Questionare</p></div>
      <div className="code_competition" onClick={() => changeColor(3)}><p>Code Competition</p></div>
    </div>
  );
};

export default Progressbar;
