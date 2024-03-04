import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  Box,
} from "@mui/material";
import { fetchMonsters, selectMonsters } from "../api/open5eApi";
import Dice from "./Dice";

function Monsters() {
  const [randomMonster, setRandomMonster] = useState(null);
  const monsters = useSelector(selectMonsters);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.open5eApi.isLoading);

  useEffect(() => {
    dispatch(fetchMonsters());
  }, [dispatch]);

  const getRandomMonster = () => {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    setRandomMonster(monsters[randomIndex]);
  };

  return (
    <Container sx={{ bgcolor: "grey", p: 3, mr:100, ml: 3, borderRadius: 8}}>
      <Typography variant="h3" gutterBottom>
        Monsters Dashboard
      </Typography>
      
      <Typography variant="h5" gutterBottom>
        Random Monster Generator
      </Typography>
      <Button
        variant="contained"
        onClick={getRandomMonster}
        disabled={isLoading}
      >
        Generate Random Monster
      </Button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {randomMonster && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                {randomMonster.name}
              </Typography>
              {/* Add more details about the random monster */}
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default Monsters;
