import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

const drawerWidth = 240;

export default function SideDrawer({ dashboardItems, setDashboardItems }) {
  const handleButtonClick = (text) => {
    setDashboardItems((prevItems) => [...prevItems, text]);
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
        {/* Dashboard items will be rendered here */}
      </Box>
    </Box>
  );
}
