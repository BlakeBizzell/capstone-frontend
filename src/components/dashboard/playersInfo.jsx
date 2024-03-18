import { useState } from 'react';
import { Typography, Box, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayerTable = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', race: '', classValue: '', level: '', ac: '', weaknesses: '', goals: '', sheetLink: '' });

  const handleChange = (field, value) => {
    setNewPlayer(prevPlayer => ({ ...prevPlayer, [field]: value }));
  };

  const addPlayer = () => {
    if (newPlayer.name && newPlayer.race && newPlayer.classValue && newPlayer.level) {
      setPlayers([...players, newPlayer]);
      setNewPlayer({ name: '', race: '', classValue: '', level: '', ac: '', weaknesses: '', goals: '', sheetLink: '' });
    }
  };

  const deletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  return (
    <Box sx={{ bgcolor: 'grey', p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both"  }}>
      <Typography variant="h4">Player Table</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Race</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>AC</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Goals</TableCell>
              <TableCell>Player Sheet Link</TableCell>
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
                  value={newPlayer.race}
                  onChange={(e) => handleChange('race', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={newPlayer.classValue}
                  onChange={(e) => handleChange('classValue', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={newPlayer.level}
                  onChange={(e) => handleChange('level', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={newPlayer.ac}
                  onChange={(e) => handleChange('ac', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={newPlayer.weaknesses}
                  onChange={(e) => handleChange('weaknesses', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={newPlayer.goals}
                  onChange={(e) => handleChange('goals', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={newPlayer.sheetLink}
                  onChange={(e) => handleChange('sheetLink', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={addPlayer}>Add</Button>
              </TableCell>
            </TableRow>
            {players.map((player, index) => (
              <TableRow key={index}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.race}</TableCell>
                <TableCell>{player.classValue}</TableCell>
                <TableCell>{player.level}</TableCell>
                <TableCell>{player.ac}</TableCell>
                <TableCell>{player.weaknesses}</TableCell>
                <TableCell>{player.goals}</TableCell>
                <TableCell>{player.sheetLink}</TableCell>
                <TableCell>
                  <IconButton onClick={() => deletePlayer(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlayerTable;
