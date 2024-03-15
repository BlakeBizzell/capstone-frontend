import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function MagicItemDetails() {
  const { magicItemSlug } = useParams();
  const [magicItemDetails, setMagicItemDetails] = useState(null);

  useEffect(() => {
    const fetchMagicItemDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/magicitems/${magicItemSlug}`
        );
        setMagicItemDetails(response.data);
      } catch (error) {
        console.error("Error fetching magic item details:", error);
      }
    };

    if (magicItemSlug) {
      fetchMagicItemDetails();
    }
  }, [magicItemSlug]);

  if (!magicItemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{magicItemDetails.name}</h1>
      <p>
        <strong>Type:</strong> {magicItemDetails.type}
      </p>
      <p>
        <strong>Rarity:</strong> {magicItemDetails.rarity}
      </p>
      <p>
        <strong>Requires Attunement:</strong>{" "}
        {magicItemDetails.requires_attunement ? "Yes" : "No"}
      </p>
      <p>
        <strong>Description:</strong> {magicItemDetails.desc}
      </p>
      {magicItemDetails.attunement && (
        <p>
          <strong>Attunement:</strong> {magicItemDetails.attunement}
        </p>
      )}
      <Button
        component={Link}
        to="/magic-items"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Back to Magic Items 
      </Button>
    </div>
  );
}

export default MagicItemDetails;
