import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

const drawerWidth = 150;

export default function SideDrawer() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (text) => {
    setSelectedItem(text);
    console.log("Clicked item:", text);
  };

  return (
    <Box sx={{ display: "flex", zIndex: -2 }}>
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
        <Box sx={{ overflow: "auto", zindex: -2}}>
          {[
            "Spells",
            "Spell List",
            "Monsters",
            "Documents",
            "Backgrounds",
            "Planes",
            "Sections",
            "Feats",
            "Conditions",
            "Races",
            "Classes",
            "Magic Items",
            "Weapons",
            "Armor"
          ].map((text, index) => (
            <Box
              key={text}
              onClick={() => handleButtonClick(text)}
              sx={{
                p: 2,
                cursor: "pointer",
                backgroundColor: selectedItem === text ? "lightgrey" : "inherit", 
              }}
            >
              <Typography>{text}</Typography>
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
