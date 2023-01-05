import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/Notification";
import User from "./components/User";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/notification" element={<Notification/>} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="/summary" element={<Summary/>} />
      </Routes>
    </>
  );
}

export default App;
