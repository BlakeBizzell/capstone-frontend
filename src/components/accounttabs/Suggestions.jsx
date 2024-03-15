import  { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const Suggestions = () => {
  const [feedback, setFeedback] = useState('');
  const [screenshots, setScreenshots] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Feedback submitted:', feedback);
    console.log('Screenshots:', screenshots);

    setFeedback('');
    setScreenshots([]);
  };

  const handleScreenshotUpload = (event) => {
    const files = event.target.files;
    const newScreenshots = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newScreenshots.push(file);
    }
    setScreenshots(newScreenshots);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper variant="outlined" elevation={3} style={{ padding: '20px', maxWidth: '500px' }}>
        <Typography variant="h5" gutterBottom>
          Feedback Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" gutterBottom>
            Please provide your feedback in the field below. You can also optionally upload screenshots to illustrate your feedback.
          </Typography>
          <TextField
            label="Your Feedback"
            variant="outlined"
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <input
              accept="image/*"
              id="button-file"
              type="file"
              onChange={handleScreenshotUpload}
              multiple
              style={{ display: 'none' }}
            />
            <label htmlFor="button-file">
              <Button variant="contained" component="span">
                Add Screenshots
              </Button>
            </label>
            <Button variant="contained" type="submit" color="primary">
              Submit Feedback
            </Button>
          </Box>
          {screenshots.length > 0 && (
            <Box mt={2}>
              <Typography variant="subtitle1">Screenshots:</Typography>
              {screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(screenshot)} alt={`Screenshot ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '5px' }} />
                </div>
              ))}
            </Box>
          )}
        </form>
      </Paper>
    </div>
  );
};

export default Suggestions;
