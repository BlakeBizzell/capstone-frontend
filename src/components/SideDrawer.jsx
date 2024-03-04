import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMonsters } from "../api/open5eApi";

const drawerWidth = 240;

export default function SideDrawer({ dashboardItems, setDashboardItems }) {
  const [randomMonster, setRandomMonster] = useState(null);
  const monsters = useSelector((state) => state.open5eApi.monsters);
  const isLoading = useSelector((state) => state.open5eApi.isLoading);
  const dispatch = useDispatch();

  const handleButtonClick = (text) => {
    if (text === "Monsters") {
      dispatch(fetchMonsters());
      getRandomMonster();
    } else {
      setDashboardItems((prevItems) => [...prevItems, text]);
    }
  };

  const getRandomMonster = () => {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    setRandomMonster(monsters[randomIndex]);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {["Monsters", "Spells", "Equipment", "MagicItems", "Weapons", "Armor"].map((text, index) => (
            <Box key={text} onClick={() => handleButtonClick(text)} sx={{ p: 2, cursor: "pointer" }}>
              <Typography>{text}</Typography>
            </Box>
          ))}
          {["Race", "Class", "Background", "Feats", "Rules", "Search"].map((text, index) => (
            <Box key={text} onClick={() => handleButtonClick(text)} sx={{ p: 2, cursor: "pointer" }}>
              <Typography>{text}</Typography>
            </Box>
          ))}
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {randomMonster && (
          <Box
            sx={{
              p: 2,
              bgcolor: "grey",
              mt: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{randomMonster.name}</Typography>
            {/* Add more details about the random monster */}
          </Box>
        )}
      </Box>
    </Box>
  );
}
