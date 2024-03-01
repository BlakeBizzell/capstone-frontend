import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { fetchMonsters, selectMonsters } from "../api/open5eApi";
import SideDrawer from "./SideDrawer";
import Draggable from "react-draggable";
import DeleteIcon from "@mui/icons-material/Delete";

function DMs() {
  const [randomMonster, setRandomMonster] = useState(null);
  const monsters = useSelector(selectMonsters);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.open5eApi.isLoading);
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    dispatch(fetchMonsters());
  }, [dispatch]);

  const getRandomMonster = () => {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    setRandomMonster(monsters[randomIndex]);
  };

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
    </Container>
  );
}

export default DMs;
