import { useState } from 'react';
import { Typography, Box, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'; // Import the Save icon
import DeleteIcon from '@mui/icons-material/Delete';

const InitiativeTracker = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState('');

  const addCharacter = () => {
    if (name && initiative) {
      const newCharacter = { name, initiative: parseInt(initiative) };
      setCharacters([...characters, newCharacter]);
      setName('');
      setInitiative('');
    }
  };

  const deleteCharacter = (index) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
  };

  const sortCharacters = () => {
    const sortedCharacters = characters.sort((a, b) => b.initiative - a.initiative);
    setCharacters(sortedCharacters);
  };

  return (
    <Box sx={{ bgcolor: 'grey', p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both"}}>
      <Typography variant="h4">Initiative Tracker</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mr: 1 }}
        />
        <TextField
          label="Initiative"
          type="number"
          value={initiative}
          onChange={(e) => setInitiative(e.target.value)}
          sx={{ mr: 1 }}
        />
        <Button variant="contained" onClick={addCharacter}>Add</Button>
      </Box>
      <IconButton variant="contained" onClick={sortCharacters}> {/* Replace Button with IconButton */}
        <SaveIcon /> {/* Use Save icon */}
      </IconButton>
      
      <List>
        {characters.map((character, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${character.name} (${character.initiative})`} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteCharacter(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default InitiativeTracker;
