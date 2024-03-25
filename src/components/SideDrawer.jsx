import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 150;

export default function SideDrawer() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (text) => {
    setSelectedItem(text);
    console.log("Clicked item:", text);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "lightgrey",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {[
            "Spell List",
            "Monsters",
            "Resources",
            "Backgrounds",
            "Sections",
            "Feats",
            "Conditions",
            "Races",
            "Classes",
            "Magic Items",
            "Weapons",
            "Armor",
          ].map((text) => (
            <MenuItem
              key={text}
              onClick={() => handleButtonClick(text)}
              component={Link}
              to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
              sx={{
                backgroundColor: selectedItem === text ? "grey" : "inherit",
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              <Typography>{text}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
