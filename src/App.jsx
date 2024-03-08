// App.jsx
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import DMs from "./components/Dashboard";
import Store from "./components/Donate";
import AccountInfo from "./components/accounttabs/myAccount";
import UpdateUserInfo from "./components/accounttabs/updateUserInfo";
import Profile from "./components/accounttabs/profile";

function App() {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          paddingTop: "64px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Dashboard" element={<DMs />} />
          <Route path="/Donate" element={<Store />} />
          <Route path="/myAccount" element={<AccountInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateUserInfo" element={<UpdateUserInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
