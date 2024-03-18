import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  Box,
  TextField,
} from "@mui/material";

function Monsters() {
  const [numberOfMonsters, setNumberOfMonsters] = useState(1);
  const [crRating, setCrRating] = useState("");
  const [monsterData, setMonsterData] = useState([]);
  const [randomMonsters, setRandomMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        (monster) => monster.challenge_rating === crRating
      );
      const randomIndex = Math.floor(Math.random() * filteredMonsters.length);
      selectedMonsters.push(filteredMonsters[randomIndex]);
    }
    setRandomMonsters(selectedMonsters);
  };

  return (
    <Container sx={{ bgcolor: "grey", p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both"  }}>
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
      <TextField
        label="CR Rating"
        value={crRating}
        onChange={(e) => setCrRating(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button
        variant="contained"
        onClick={getRandomMonsters}
        disabled={isLoading || crRating === ""}
      >
        Generate Random Monsters
      </Button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {randomMonsters.length > 0 && (
            <Box sx={{ mt: 2 }}>
              {randomMonsters.map((monster, index) => (
                <Typography key={index} variant="h6" gutterBottom>
                  {monster.name}
                </Typography>
                // Add more details about the random monsters
              ))}
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default Monsters;
