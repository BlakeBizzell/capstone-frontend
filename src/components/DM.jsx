import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress, Button } from "@mui/material";
import { fetchMonsters, selectMonsters } from "../api/open5eApi";
import SideDrawer from "./SideDrawer";


function DMs() {
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
    <Container>
      <Typography variant="h3" gutterBottom>
        DMs Dashboard
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
            <div>
              <Typography variant="h6" gutterBottom>
                {randomMonster.name}
              </Typography>
              {/* Add more details about the random monster */}
            </div>
          )}
        </>
      )}

      <SideDrawer />
    </Container>
  );
}

export default DMs;
