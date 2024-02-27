// App.jsx
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import DMs from "./components/DM"; 
import Player from "./components/Player"; 
import Store from "./components/Store";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/player" element={<Player />} /> 
          <Route path="/DM" element={<DMs />} /> 
          <Route path="/Store" element={<Store />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
