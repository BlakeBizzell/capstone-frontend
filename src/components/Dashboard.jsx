import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Fab,
  Dialog,
  DialogContent,
  Switch,
  Box,
} from "@mui/material";
import SideDrawer from "./SideDrawer";
import Dice from "./dashboard/Dice";
import Monsters from "./dashboard/monsterGen";
import RandomNameGenerator from "./dashboard/Name";
import InitiativeTracker from "./dashboard/Initiative";
import PlayerTable from "./dashboard/playersInfo";
import TreasureGenerator from "./dashboard/Treasure";
import CasinoIcon from "@mui/icons-material/Casino";
import SaveIcon from "@mui/icons-material/Save"; // Import the save icon
import Stopwatch from "./dashboard/Timer";
import HitPointTracker from "./dashboard/hitPointTracker";

function DMs() {
  const [dashboardItems, setDashboardItems] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openSavePopup, setOpenSavePopup] = useState(false); 

  const [zoomStates, setZoomStates] = useState({
    Monsters: false,
    Names: false,
    "Player Table": true,
    "Initiative Tracker": true,
    Treasure: false,
    Timer: false,
    "Hit Point Tracker": false,
  });

  const toggleZoomState = (itemName) => {
    setZoomStates((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));

    setDashboardItems((prevItems) => {
      if (prevItems.includes(itemName)) {
        return prevItems.filter((item) => item !== itemName);
      } else {
        return [...prevItems, itemName];
      }
    });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ ml: "30%" }}>
        DMs Dashboard
      </Typography>

      <SideDrawer
        dashboardItems={dashboardItems}
        setDashboardItems={setDashboardItems}
        sx={{ zIndex: -2 }}
      />

      <Box sx={{ marginBottom: 2, border: "1px solid black", padding: "10px" }}>
        <Grid container spacing={2}>
          {Object.keys(zoomStates).map((item, index) => (
            <Grid item key={index} xs={6} md={4} lg={3}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle1">
                    {item === "Gold" ? "Random Store" : item}
                  </Typography>
                </Grid>
                <Grid item>
                  {item === "Timer" ? (
                    <Switch
                      checked={zoomStates[item]}
                      onChange={() => toggleZoomState(item)}
                      color="primary"
                    />
                  ) : (
                    <Switch
                      checked={zoomStates[item]}
                      onChange={() => toggleZoomState(item)}
                      color="primary"
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={2}>
        {Object.keys(zoomStates).map((item, index) => (
          <Grid
            item
            key={index}


          >
            {item === "Monsters" && zoomStates.Monsters && <Monsters />}
            {item === "Names" && zoomStates.Names && <RandomNameGenerator />}
            {item === "Player Table" && zoomStates["Player Table"] && (
              <PlayerTable />
            )}
            {item === "Initiative Tracker" &&
              zoomStates["Initiative Tracker"] && <InitiativeTracker />}
            {item === "Treasure" && zoomStates.Treasure && (
              <TreasureGenerator />
            )}
            {item === "Timer" && zoomStates.Timer && <Stopwatch />}
            {item === "Hit Point Tracker" &&
              zoomStates["Hit Point Tracker"] && <HitPointTracker />}
          </Grid>
        ))}
      </Grid>

      <Fab
        style={{
          position: "fixed",
          bottom: "100px",
          right: "200px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "75px",
          height: "75px",
        }}
        onClick={() => setOpenPopup(true)}
      >
        <CasinoIcon style={{ color: "black" }} />
      </Fab>
      
      {/* Save FAB */}
      <Fab
        style={{
          position: "fixed",
          bottom: "100px",
          right: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "75px",
          height: "75px",
        }}
        onClick={() => setOpenSavePopup(true)} 
      >
        <SaveIcon style={{ color: "black" }} />
      </Fab>


      <Dialog open={openSavePopup} onClose={() => setOpenSavePopup(false)}>
        <DialogContent style={{ width: "100% ", height: "100%" }}>
          <Typography variant="h5">Blank Container</Typography>
        </DialogContent>
      </Dialog>

      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogContent style={{ width: "100% ", height: "100%" }} />
        {<Dice />}
      </Dialog>
    </Container>
  );
}

export default DMs;
