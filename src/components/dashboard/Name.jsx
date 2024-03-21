import { useState } from "react";
import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import { useSaveRandomNameMutation } from "../../api/capstoneApi";

const RandomNameGenerator = () => {
  const [selectedRace, setSelectedRace] = useState("Human");
  const [randomFirstName, setRandomFirstName] = useState("");
  const [randomLastName, setRandomLastName] = useState("");


  const [saveRandomName, { isLoading }] = useSaveRandomNameMutation();

  const generateRandomName = () => {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";


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

  const handleSaveRandomName = () => {
    const userId = localStorage.getItem("userId");

    saveRandomName({
      race: selectedRace,
      firstName: randomFirstName,
      lastName: randomLastName,
      userId: userId, 
    })
      .unwrap() 
      .then((response) => {
        console.log("Random name saved successfully:", response.message);
    
      })
      .catch((error) => {
        console.error("Error saving random name:", error);

      });
  };

  return (
    <Box
      sx={{
        bgcolor: "grey",
        p: 3,
        ml: 3,
        borderRadius: 8,
        overflow: "auto",
        resize: "both",
      }}
    >
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
        <Button
          variant="contained"
          style={{ marginBottom: "1px", marginLeft: "20px" }}
          onClick={handleSaveRandomName} 
          disabled={isLoading} 
        >
          {isLoading ? "Saving..." : "Save"}
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
