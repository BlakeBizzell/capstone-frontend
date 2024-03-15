import { useState, useEffect } from 'react';
import { Box, TextField, Button, FormControlLabel, Switch } from '@mui/material';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [limit, setLimit] = useState(0); // State for custom time limit
  const [customTime, setCustomTime] = useState(''); // State for custom time input field

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (isCountingUp) {
          setTime(prevTime => prevTime + 1);
        } else {
          if (time > 0) {
            setTime(prevTime => prevTime - 1);
          } else {
            setIsRunning(false);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, isCountingUp, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handlePresetTime = (seconds) => {
    setTime(seconds);
    setLimit(seconds);
    setIsRunning(true);
  };

  const handleCustomTimeChange = (event) => {
    setCustomTime(event.target.value);
  };

  const handleCustomTimeSubmit = () => {
    const seconds = parseInt(customTime) || 0;
    setTime(seconds);
    setLimit(seconds);
    setIsRunning(true);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ bgcolor: 'grey', p: 3, ml: 3, borderRadius: 8 }}>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <Button onClick={handleStart} disabled={isRunning} variant="contained">
        Start
      </Button>
      <Button onClick={handlePause} disabled={!isRunning} variant="contained">
        Pause
      </Button>
      <Button onClick={handleReset} variant="contained">
        Reset
      </Button>
      <br />
      <Button onClick={() => handlePresetTime(30)} variant="outlined">30s</Button>
      <Button onClick={() => handlePresetTime(60)} variant="outlined">1min</Button>
      <Button onClick={() => handlePresetTime(300)} variant="outlined">5min</Button>
      <TextField
        label="Custom Time (seconds)"
        type="number"
        value={customTime}
        onChange={handleCustomTimeChange}
        variant="outlined"
        style={{ marginTop: '10px' }}
      />
      <Button onClick={handleCustomTimeSubmit} variant="contained">
        Apply Custom Time
      </Button>
      {limit > 0 && (
        <p>Time Limit: {formatTime(limit)}</p>
      )}
      <FormControlLabel
        control={<Switch checked={isCountingUp} onChange={() => setIsCountingUp(!isCountingUp)} />}
        label="Count Up"
      />
    </Box>
  );
}

export default Stopwatch;
