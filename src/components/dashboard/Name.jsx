import { useState } from "react";
import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";

const RandomNameGenerator = () => {
  const [selectedRace, setSelectedRace] = useState("Human");
  const [randomFirstName, setRandomFirstName] = useState("");
  const [randomLastName, setRandomLastName] = useState("");

  const generateRandomName = () => {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";

    // Generate first name
    let firstName = "";
    const firstNameLength = Math.floor(Math.random() * 3) + 3; 
    for (let i = 0; i < firstNameLength; i++) {
      if (i % 2 === 0) {
        firstName += consonants.charAt(
          Math.floor(Math.random() * consonants.length)
        );
      } else {
        firstName += vowels.charAt(Math.floor(Math.random() * vowels.length));
      }
    }

    // Generate last name
    let lastName = "";
    const lastNameLength = Math.floor(Math.random() * 8) + 3; 
    for (let i = 0; i < lastNameLength; i++) {
      if (i % 2 === 0) {
        lastName += consonants.charAt(
          Math.floor(Math.random() * consonants.length)
        );
      } else {
        lastName += vowels.charAt(Math.floor(Math.random() * vowels.length));
      }
    }

    setRandomFirstName(firstName);
    setRandomLastName(lastName);
  };

  return (
    <Box sx={{ bgcolor: "grey", p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both"  }}>
      <Typography variant="h4">Random Name Generator</Typography>
      <Box>
        <TextField
          select
          label="Select a race"
          value={selectedRace}
          onChange={(e) => {
            setSelectedRace(e.target.value);
          }}
        >
          <MenuItem value="Human">Human</MenuItem>
          <MenuItem value="Elf">Elf</MenuItem>
          <MenuItem value="Dwarf">Dwarf</MenuItem>
          <MenuItem value="Halfling">Halfling</MenuItem>
          <MenuItem value="Dragonborn">Dragonborn</MenuItem>
          <MenuItem value="Tiefling">Tiefling</MenuItem>
        </TextField>
        <Button
          variant="contained"
          onClick={() => generateRandomName(selectedRace)}
        >
          Generate Name
        </Button>
      </Box>
      <Box>
        <Typography variant="subtitle1">
          <strong>Random {selectedRace} name:</strong> {randomFirstName}{" "}
          {randomLastName}
        </Typography>
      </Box>
    </Box>
  );
};

export default RandomNameGenerator;
