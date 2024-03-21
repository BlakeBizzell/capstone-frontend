import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  Box,
  TextField,
  Slider,
  IconButton,
  Dialog,
  DialogActions,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SaveIcon from "@mui/icons-material/Save";
import MonsterDetails from "../pages/MonsterDetails";
import { useSaveMonsterInfoMutation } from "../../api/capstoneApi";

function Monsters() {
  const [numberOfMonsters, setNumberOfMonsters] = useState(1);
  const [crRange, setCrRange] = useState([0, 30]);
  const [monsterData, setMonsterData] = useState([]);
  const [randomMonsters, setRandomMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMonster, setSelectedMonster] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.open5e.com/monsters?page=1`
        );
        setMonsterData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching monster data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomMonsters = () => {
    const selectedMonsters = [];
    for (let i = 0; i < numberOfMonsters; i++) {
      const filteredMonsters = monsterData.filter(
        (monster) =>
          parseInt(monster.challenge_rating) >= crRange[0] &&
          parseInt(monster.challenge_rating) <= crRange[1]
      );
      const randomIndex = Math.floor(Math.random() * filteredMonsters.length);
      selectedMonsters.push(filteredMonsters[randomIndex]);
    }
    setRandomMonsters(selectedMonsters);
  };

  const clearRandomMonsters = () => {
    setRandomMonsters([]);
  };

  const handleCrRangeChange = (event, newValue) => {
    setCrRange(newValue);
  };

  const handleInfoClick = (monster) => {
    setSelectedMonster(monster);
    setOpenDialog(true);
  };

  const [saveMonsterInfo] = useSaveMonsterInfoMutation();

  const handleSaveMonster = async (monster) => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User ID not found in local storage.");
        return;
      }

      const monsterDataWithUserId = { ...monster, userId };

      await saveMonsterInfo(monsterDataWithUserId);
    } catch (error) {
      console.error("Error saving monster information:", error);
    }
  };

  return (
    <Container
      sx={{
        bgcolor: "grey",
        p: 3,
        ml: 3,
        borderRadius: 8,
        overflow: "auto",
        resize: "both",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Monsters Dashboard
      </Typography>
      <Typography variant="h5" gutterBottom>
        Random Monster Generator
      </Typography>
      <TextField
        label="Number of Monsters"
        type="number"
        value={numberOfMonsters}
        onChange={(e) => setNumberOfMonsters(parseInt(e.target.value))}
        sx={{ mr: 2 }}
      />
      <Typography id="cr-slider" gutterBottom>
        CR Range
      </Typography>
      <Slider
        value={crRange}
        onChange={handleCrRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={30}
        aria-labelledby="cr-slider"
        sx={{ mr: 2 }}
      />
      <Button
        variant="contained"
        onClick={getRandomMonsters}
        disabled={isLoading}
      >
        Generate Random Monsters
      </Button>
      <Button
        variant="contained"
        style={{ marginBottom: "2px", marginLeft: "20px" }}
        onClick={clearRandomMonsters}
      >
        Clear
      </Button>{" "}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {randomMonsters.length > 0 && (
            <Box sx={{ mt: 2 }}>
              {randomMonsters.map((monster, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6" gutterBottom>
                    {monster.name}
                    &nbsp;-&nbsp;CR: {
                      monster.challenge_rating
                    }&nbsp;-&nbsp;HP: {monster.hit_points}
                  </Typography>
                  <IconButton onClick={() => handleInfoClick(monster)}>
                    <InfoIcon />
                  </IconButton>
                  <IconButton onClick={() => handleSaveMonster(monster)}>
                    <SaveIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </>
      )}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <MonsterDetails monsterName={selectedMonster?.slug} />
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Monsters;
