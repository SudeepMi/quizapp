import React from "react";
import { redirect, useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    if(localStorage.getItem("token")){
        navigate("/home")
    }
  }, [])
  

  const handleClick = () => {
    if (formValue.username === "nagarjuna" && formValue.password === "1234") {
      let token = parseInt(Math.random() * 10000);
      localStorage.setItem("token", token);
      navigate("/home")
    }
  };

  return (
    <div className="siginin__container">
      <div className="signin">
        <div className="welcome">
          <h1>Welcome</h1>
          <i className="ri-shield-keyhole-line"></i>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter username"
            value={formValue.username}
            name="username"
            onChange={(e) => setFormValue({...formValue,"username":e.target.value})}
          />
          <input
            type="password"
            placeholder="password"
            value={formValue.password}
            name="password"
            onChange={(e) => setFormValue({...formValue,"password":e.target.value})}
          />
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Signin;
