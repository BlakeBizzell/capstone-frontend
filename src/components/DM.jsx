import React, { useState } from "react";
import { Container, Box, IconButton, Typography } from "@mui/material";
import Draggable from "react-draggable";
import DeleteIcon from "@mui/icons-material/Delete";
import SideDrawer from "./SideDrawer";
import Dice from "./Dice";
import Monsters from "./Mosters";

function DMs() {
  const [dashboardItems, setDashboardItems] = useState([]);

  const handleDelete = (index) => {
    setDashboardItems((prevItems) =>
      prevItems.filter((item, i) => i !== index)
    );
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        DMs Dashboard
      </Typography>

      <SideDrawer
        dashboardItems={dashboardItems}
        setDashboardItems={setDashboardItems}
      />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {dashboardItems.map((item, index) => (
          <Draggable key={index}>
            <Box
              sx={{
                p: 2,
                bgcolor: "grey",
                mt: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>{item}</Typography>
              <IconButton onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Draggable>
        ))}
      </Box>
      <Dice />
      <Monsters />
    </Container>
  );
}

export default DMs;
