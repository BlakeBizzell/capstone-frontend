import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function RacesDetails() {
  const { RacesSlug } = useParams();
  const [racesDetails, setRacesDetails] = useState(null);

  useEffect(() => {
    const fetchRacesDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/races/${RacesSlug}`
        );
        setRacesDetails(response.data);
      } catch (error) {
        console.error("Error fetching Races details:", error);
      }
    };

    if (RacesSlug) {
      fetchRacesDetails();
    }
  }, [RacesSlug]);

  if (!racesDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{racesDetails.name}</h1>
      <p>
        <strong>Description:</strong> {racesDetails.desc}
      </p>
      <p>
        <strong>Ability Score Increase:</strong> {racesDetails.asi_desc}
      </p>
      <ul>
        {racesDetails.asi.map((bonus, index) => (
          <li key={index}>{bonus.attributes[0]}: +{bonus.value}</li>
        ))}
      </ul>
      <p>
        <strong>Age:</strong> {racesDetails.age}
      </p>
      <p>
        <strong>Alignment:</strong> {racesDetails.alignment}
      </p>
      <p>
        <strong>Size:</strong> {racesDetails.size}
      </p>
      <p>
        <strong>Speed:</strong> {racesDetails.speed_desc}
      </p>
      <p>Walking Speed: {racesDetails.speed.walk} feet</p>
      <p>
        <strong>Languages:</strong> {racesDetails.languages}
      </p>
      <p>
        <strong>Vision:</strong> {racesDetails.vision}
      </p>
      <p>
        <strong>Traits:</strong> {racesDetails.traits}
      </p>
      {racesDetails.subraces && racesDetails.subraces.length > 0 && (
        <div>
          <h2>Subraces</h2>
          {racesDetails.subraces.map((subrace, index) => (
            <div key={index}>
              <h3>{subrace.name}</h3>
              <p>{subrace.desc}</p>
              <p>
                <strong>Ability Score Increase:</strong> {subrace.asi_desc}
              </p>
              <ul>
                {subrace.asi.map((bonus, index) => (
                  <li key={index}>{bonus.attributes[0]}: +{bonus.value}</li>
                ))}
              </ul>
              <p>
                <strong>Traits:</strong> {subrace.traits}
              </p>
            </div>
          ))}
        </div>
      )}
      <Button
        component={Link}
        to="/Races"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Races
      </Button>
    </div>
  );
}

export default RacesDetails;
