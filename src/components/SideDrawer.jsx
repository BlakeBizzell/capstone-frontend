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

  const handleCloseNavMenu = () => {
    // Close the navigation menu if needed
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
        <Box sx={{ overflow: "auto", zIndex: -2 }}>
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
            <MenuItem
              key={text}
              onClick={() => {
                handleButtonClick(text);
                handleCloseNavMenu();
              }}
              component={Link}
              to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
              sx={{
                backgroundColor: selectedItem === text ? "lightgrey" : "inherit",
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
              }}
            >
              <Typography>{text}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
