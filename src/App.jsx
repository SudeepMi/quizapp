import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Public from "./pages/Public";
import PrivateRoute from "./utils/PrivateRoute";
import Signin from "./components/Signin";
import axios from "axios";
// import PublicRoute from "./utils/PublicRoute";

function App() {
  const [islogged, setislogged] = React.useState(true);
  const [leaders, setLeaders] = React.useState([]);
  // const leaders = [];
  React.useEffect(() => {
    axios
      .get("https://quizapp-server-production.up.railway.app/getTeam")
      .then((res) => setLeaders(res.data));
  }, []);

  return (
    <div className="main">
      {islogged && <Navbar />}
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route
            path="/home"
            element={<Home leaders={leaders} setLeaders={setLeaders} />}
          />
        </Route>
        <Route
          path="/"
          element={<Public leaders={leaders} setLeaders={setLeaders} />}
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
