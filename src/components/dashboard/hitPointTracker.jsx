import { useState } from 'react';
import { Typography, Box, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField } from '@mui/material';

const HitPointTracker = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', maxHP: 100, currentHP: 100 });

  const handleChange = (field, value) => {
    setNewPlayer(prevPlayer => ({ ...prevPlayer, [field]: value }));
  };

  const addPlayer = () => {
    if (newPlayer.name) {
      setPlayers([...players, newPlayer]);
      setNewPlayer({ name: '', maxHP: 100, currentHP: 100 });
    }
  };

  const deletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  return (
    <Box sx={{ bgcolor: 'grey', p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both" }}>
      <Typography variant="h4">Hit Point Tracker</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Max HP</TableCell>
              <TableCell>Current HP</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  value={newPlayer.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={newPlayer.maxHP}
                  onChange={(e) => handleChange('maxHP', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={newPlayer.currentHP}
                  onChange={(e) => handleChange('currentHP', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={addPlayer}>Add</Button>
              </TableCell>
            </TableRow>
            {players.map((player, index) => (
              <TableRow key={index}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.maxHP}</TableCell>
                <TableCell>{player.currentHP}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => deletePlayer(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HitPointTracker;
