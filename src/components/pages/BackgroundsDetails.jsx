import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function BackgroundsDetails() {
  const { BackgroundsSlug } = useParams();
  const [backgroundsDetails, setBackgroundsDetails] = useState(null);

  useEffect(() => {
    const fetchBackgroundsDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/backgrounds/${BackgroundsSlug}`
        );
        setBackgroundsDetails(response.data);
      } catch (error) {
        console.error("Error fetching background details:", error);
      }
    };

    if (BackgroundsSlug) {
      fetchBackgroundsDetails();
    }
  }, [BackgroundsSlug]);

  if (!backgroundsDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{backgroundsDetails.name}</h1>
      <p>
        <strong>Description:</strong> {backgroundsDetails.desc}
      </p>
      <p>
        <strong>Skill Proficiencies:</strong>{" "}
        {backgroundsDetails.skill_proficiencies}
      </p>
      <p>
        <strong>Tool Proficiencies:</strong>{" "}
        {backgroundsDetails.tool_proficiencies
          ? backgroundsDetails.tool_proficiencies
          : "None"}
      </p>
      <p>
        <strong>Languages:</strong> {backgroundsDetails.languages}
      </p>
      <p>
        <strong>Equipment:</strong> {backgroundsDetails.equipment}
      </p>
      <p>
        <strong>Feature:</strong> {backgroundsDetails.feature}
      </p>
      <p>
        <strong>Feature Description:</strong> {backgroundsDetails.feature_desc}
      </p>
      <p>
        <strong>Suggested Characteristics:</strong>{" "}
        {backgroundsDetails.suggested_characteristics}
      </p>
      <Button
        component={Link}
        to="/Backgrounds"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Backgrounds
      </Button>
    </div>
  );
}

export default BackgroundsDetails;
