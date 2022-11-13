import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Public from "./pages/Public";
import PrivateRoute from "./utils/PrivateRoute";
import Signin from "./components/Signin";
// import PublicRoute from "./utils/PublicRoute";

function App() {
  const [islogged, setislogged] = React.useState(true);

  const leaders = [
    { team: "Team A", attemted: "20", points: 10, rank: 1 },
    { team: "Team B", attemted: "10", points: 10, rank: 2 },
    { team: "Team C", attemted: "10", points: 10, rank: 3 },
    { team: "Team C", attemted: "10", points: 10, rank: 4 },

  ];

  return (
    <div className="main">
      {islogged && <Navbar />}
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route path="/home" element={<Home leaders = {leaders}/>} />
        </Route>
        <Route path="/" element={<Public leaders = {leaders}/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
