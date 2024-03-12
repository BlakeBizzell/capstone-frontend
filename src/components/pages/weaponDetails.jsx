import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function WeaponDetails() {
  const { weaponSlug } = useParams();
  const [weaponDetails, setWeaponDetails] = useState(null);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/weapons/${weaponSlug}`
        );
        setWeaponDetails(response.data);
      } catch (error) {
        console.error("Error fetching weapon details:", error);
      }
    };

    if (weaponSlug) {
      fetchWeaponDetails();
    }
  }, [weaponSlug]);

  if (!weaponDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{weaponDetails.name}</h1>
      <p>
        <strong>Category:</strong> {weaponDetails.category}
      </p>
      <p>
        <strong>Cost:</strong> {weaponDetails.cost}
      </p>
      <p>
        <strong>Damage:</strong> {weaponDetails.damage_dice} (
        {weaponDetails.damage_type})
      </p>
      <p>
        <strong>Weight:</strong> {weaponDetails.weight}
      </p>
      <p>
        <strong>Properties:</strong>{" "}
        {weaponDetails.properties.length > 0
          ? weaponDetails.properties.join(", ")
          : "None"}
      </p>
      <Button
        component={Link}
        to="/weapons"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Weapons
      </Button>
    </div>
  );
}

export default WeaponDetails;
