import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function SpellDetails() {
  const { spellName } = useParams();
  const [spellDetails, setSpellDetails] = useState(null);

  useEffect(() => {
    const fetchSpellDetails = async () => {
      try {
        // Replace the API URL with the correct source for spell data
        const response = await axios.get(
          `https://api.open5e.com/spells/${spellName}`
        );
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
      <p>
        <strong>School:</strong> {spellDetails.school} |{" "}
        <strong>Classes:</strong> {spellDetails.dnd_class} |{" "}
      </p>
      <p>
        <strong>Range:</strong> {spellDetails.range}
      </p>
      <p>
        <strong>Casting Time:</strong> {spellDetails.casting_time}
      </p>
      <p>
        <strong>Duration:</strong> {spellDetails.duration}
      </p>
      <p>
        <strong>Components:</strong> {spellDetails.components}
      </p>
      <p>
        <strong>Description:</strong> {spellDetails.desc}
      </p>
      <p>
        <strong>At Higher Levels:</strong> {spellDetails.higher_level}
      </p>

      <Button
        component={Link}
        to="/spell-list"
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
