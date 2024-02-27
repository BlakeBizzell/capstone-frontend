import{ CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
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
          </Routes>
        </div>
  
    </>
  )
}

export default App
