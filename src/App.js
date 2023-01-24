import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/Notification";
import User from "./components/User";
import Summary from "./components/Summary";
import ThetoxState from "./context/thetox/ThetoxState";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <ThetoxState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/summary" element={<Summary />} />
        </Routes>
      </ThetoxState>
    </>
  );
}

export default App;
