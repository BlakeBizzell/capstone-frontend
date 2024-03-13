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
import SpellList from "./components/pages/spell-list";
import Armor from "./components/pages/Armor";
import Background from "./components/pages/Backgrounds";
import ClassesList from "./components/pages/Classes";
import MonsterList from "./components/pages/Monsters";
import Conditions from "./components/pages/Conditions";
import Documents from "./components/pages/Resources";
import MagicItems from "./components/pages/magic-Items";
import Weapons from "./components/pages/weapons";
import Races from "./components/pages/Races";
import Feats from "./components/pages/Feats";
import SpellDetails from "./components/pages/SpellDetails";
import MonsterDetails from "./components/pages/MonsterDetails";
import MagicItemDetails from "./components/pages/MagicItemDetails";
import WeaponDetails from "./components/pages/weaponDetails";
import ArmorDetails from "./components/pages/armorDetails";
import Sections from "./components/pages/Sections";

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
          <Route path="/spell-list" element={<SpellList />} />
          <Route path="/Armor" element={<Armor />} />
          <Route path="/backgrounds" element={<Background />} />
          <Route path="/Classes" element={<ClassesList />} />
          <Route path="/Monsters" element={<MonsterList />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route path="/Resources" element={<Documents />} />
          <Route path="/magic-Items" element={<MagicItems />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/Races" element={<Races />} />
          <Route path="/Feats" element={<Feats />} />
          <Route path="/Sections" element={<Sections />} />
          <Route path="/spells/:spellName" element={<SpellDetails />} />
          <Route path="/monsters/:monsterName" element={<MonsterDetails />} />
          <Route
            path="/magicitems/:magicItemSlug"
            element={<MagicItemDetails />}
          />
          <Route path="/weapons/:weaponSlug" element={<WeaponDetails />} />
          <Route path="/Armor/:armorSlug" element={<ArmorDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
