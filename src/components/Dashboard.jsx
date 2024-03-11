import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SideDrawer from "./SideDrawer";
import Dice from "./dashboard/Dice";
import Monsters from "./dashboard/Mosters";
import RandomNameGenerator from "./dashboard/Name";
import GoldPiece from "./dashboard/Shop";
import InitiativeTracker from "./dashboard/Initiative";
import PlayerTable from "./dashboard/playersInfo";
import TreasureGenerator from "./dashboard/Treasure";

function DMs() {
  const [dashboardItems, setDashboardItems] = useState([]);

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

       <SideDrawer
        dashboardItems={dashboardItems}
        setDashboardItems={setDashboardItems}
        sx={{zIndex: -2 }}
      /> 
      
      <Grid container spacing={2}>
        {dashboardItems.map((item, index) => (
          <Grid item key={index} xs={calculateGridSize()} sm={6} md={4} lg={3}>

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
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlayerTable />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InitiativeTracker />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TreasureGenerator />
        </Grid>
    </Container>
  );
}

export default DMs;
