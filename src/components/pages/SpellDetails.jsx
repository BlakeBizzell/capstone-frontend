import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function SpellDetails() {
  const { spellName } = useParams();
  const [spellDetails, setSpellDetails] = useState(null);

  useEffect(() => {
    const fetchSpellDetails = async () => {
      try {
        const response = await axios.get(`https://api.open5e.com/spells/${spellName}`);
        setSpellDetails(response.data);
      } catch (error) {
        console.error("Error fetching spell details:", error);
      }
    };

    if (spellName) {
      fetchSpellDetails();
    }
  }, [spellName]);

  if (!spellDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{spellDetails.name}</h1>
      <p><strong>Range:</strong> {spellDetails.range}</p>
      <p><strong>Casting Time:</strong> {spellDetails.casting_time}</p>
      <p><strong>Duration:</strong> {spellDetails.duration}</p>
      <p><strong>Components:</strong> {spellDetails.components}</p>
      <p><strong>Description:</strong> {spellDetails.desc}</p>
      {/* Add more details as needed */}

      {/* MUI Page Button */}
      <Button
        component={Link}
        to="/spells"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Spells
      </Button>
    </div>
  );
}

export default SpellDetails;
