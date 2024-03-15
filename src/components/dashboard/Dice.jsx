import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";

function Dice() {
  const [numDice, setNumDice] = useState(1);
  const [diceType, setDiceType] = useState("d6");
  const [randomDiceResult, setRandomDiceResult] = useState(null);

  const rollDice = () => {
    let result = [];
    for (let i = 0; i < numDice; i++) {
      let roll = Math.floor(Math.random() * parseInt(diceType.slice(1))) + 1;
      result.push(roll);
    }
    setRandomDiceResult(result.join(", "));
  };

  return (
    <Box sx={{ bgcolor: "lightblue", p: 3, }}>
      <Typography variant="h5" gutterBottom>
        Random Dice Generator
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <TextField
          label="Number of Dice"
          type="number"
          variant="outlined"
          value={numDice}
          onChange={(e) => setNumDice(parseInt(e.target.value))}
        />
        <TextField
          select
          label="Dice Type"
          value={diceType}
          onChange={(e) => setDiceType(e.target.value)}
          variant="outlined"
          sx={{ ml: 2, minWidth: 120 }}
        >
          {["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button
        variant="contained"
        onClick={rollDice}
      >
        Roll Dice
      </Button>
      {randomDiceResult && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Result: {randomDiceResult}
        </Typography>
      )}
    </Box>
  );
}

export default Dice;
