import { useState } from "react";
import { Container, Grid, Box, IconButton, Typography } from "@mui/material";
import Draggable from "react-draggable";
import DeleteIcon from "@mui/icons-material/Delete";
import SideDrawer from "./SideDrawer";
import Dice from "./dashboard/Dice";
import Monsters from "./dashboard/Mosters";
import RandomNameGenerator from "./dashboard/Name";
import GoldPiece from "./dashboard/Shop";

function DMs() {
  const [dashboardItems, setDashboardItems] = useState([]);

  const handleDelete = (index) => {
    setDashboardItems((prevItems) =>
      prevItems.filter((item, i) => i !== index)
    );
  };

  const calculateGridSize = () => {
    const numItems = dashboardItems.length;
    if (numItems === 0) return 12; // Fallback to full width if no items
    return Math.min(12 / numItems, 4); // Each item takes at most 4 grid columns
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        DMs Dashboard
      </Typography>

      {/* <SideDrawer
        dashboardItems={dashboardItems}
        setDashboardItems={setDashboardItems}
      /> */}
      
      <Grid container spacing={2}>
        {dashboardItems.map((item, index) => (
          <Grid item key={index} xs={calculateGridSize()} sm={6} md={4} lg={3}>
            <Draggable>
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
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Dice />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Monsters />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RandomNameGenerator />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GoldPiece />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DMs;
