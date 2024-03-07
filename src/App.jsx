// App.jsx
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import DMs from "./components/DM";
import Store from "./components/Store";
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
          <Route path="/DM" element={<DMs />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/myAccount" element={<AccountInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateUserInfo" element={<UpdateUserInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
