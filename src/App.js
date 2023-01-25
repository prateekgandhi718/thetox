import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/Notification";
import User from "./components/User";
import Summary from "./components/Summary";
import ThetoxState from "./context/thetox/ThetoxState";
import Landing from "./components/Landing";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <>
      <ThetoxState>
        <GoogleOAuthProvider clientId="249012695571-240dgb2tqofgh3gm2okoptj9aulsn1vj.apps.googleusercontent.com">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/summary" element={<Summary />} />
          </Routes>
        </GoogleOAuthProvider>
      </ThetoxState>
    </>
  );
}

export default App;
