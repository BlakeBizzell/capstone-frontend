import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function ArmorDetails() {
  const { armorSlug } = useParams();
  const [armorDetails, setArmorDetails] = useState(null);

  useEffect(() => {
    const fetchArmorDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/armor/${armorSlug}`
        );
        setArmorDetails(response.data);
      } catch (error) {
        console.error("Error fetching armor details:", error);
      }
    };

    if (armorSlug) {
      fetchArmorDetails();
    }
  }, [armorSlug]);

  if (!armorDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{armorDetails.name}</h1>
      <p>
        <strong>Category:</strong> {armorDetails.category}
      </p>
      <p>
        <strong>Base AC:</strong> {armorDetails.base_ac}
      </p>
      <p>
        <strong>AC Calculation:</strong> {armorDetails.ac_string}
      </p>
      <p>
        <strong>Strength Requirement:</strong>{" "}
        {armorDetails.strength_requirement ? armorDetails.strength_requirement : "None"}
      </p>
      <p>
        <strong>Cost:</strong> {armorDetails.cost}
      </p>
      <p>
        <strong>Stealth Disadvantage:</strong>{" "}
        {armorDetails.stealth_disadvantage ? "Yes" : "No"}
      </p>
      <Button
        component={Link}
        to="/Armor"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Armor
      </Button>
    </div>
  );
}

export default ArmorDetails;
