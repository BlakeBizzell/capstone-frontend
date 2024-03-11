import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function MonsterDetails() {
  const { monsterName } = useParams();
  const [monsterDetails, setMonsterDetails] = useState(null);

  useEffect(() => {
    const fetchMonsterDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/monsters/${monsterName}`
        );
        setMonsterDetails(response.data);
      } catch (error) {
        console.error("Error fetching monster details:", error);
      }
    };

    if (monsterName) {
      fetchMonsterDetails();
    }
  }, [monsterName]);

  if (!monsterDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{monsterDetails.name}</h1>
      <p>
        <strong>Type:</strong> {monsterDetails.type}
      </p>
      <p>
        <strong>CR:</strong> {monsterDetails.challenge_rating}
      </p>
      <p>
        <strong>Size:</strong> {monsterDetails.size}
      </p>
      <p>
        <strong>Hit Points:</strong> {monsterDetails.hit_points}
      </p>
      {/* Add more details as needed */}

      <Button
        component={Link}
        to="/Monsters"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Monsters
      </Button>
    </div>
  );
}

export default MonsterDetails;
