import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

function ClassesDetails() {
  const { ClassesSlug } = useParams();
  const [classesDetails, setClassesDetails] = useState(null);

  useEffect(() => {
    const fetchClassesDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/classes/${ClassesSlug}`
        );
        setClassesDetails(response.data);
      } catch (error) {
        console.error("Error fetching Classes details:", error);
      }
    };

    if (ClassesSlug) {
      fetchClassesDetails();
    }
  }, [ClassesSlug]);

  if (!classesDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{classesDetails.name}</h1>
      <p>
        <strong>Description:</strong> {classesDetails.desc}
      </p>
      <p>
        <strong>Hit Dice:</strong> {classesDetails.hit_dice}
      </p>
      <p>
        <strong>Proficiency Armor:</strong> {classesDetails.prof_armor}
      </p>
      <p>
        <strong>Proficiency Weapons:</strong> {classesDetails.prof_weapons}
      </p>
      <p>
        <strong>Proficiency Tools:</strong> {classesDetails.prof_tools}
      </p>
      <p>
        <strong>Proficiency Saving Throws:</strong>{" "}
        {classesDetails.prof_saving_throws}
      </p>
      <p>
        <strong>Proficiency Skills:</strong> {classesDetails.prof_skills}
      </p>
      <p>
        <strong>Equipment:</strong> {classesDetails.equipment}
      </p>
      <p>
        <strong>Spellcasting Ability:</strong>{" "}
        {classesDetails.spellcasting_ability}
      </p>
      <p>
        <strong>Subtypes Name:</strong> {classesDetails.subtypes_name}
      </p>
      <h2>Features</h2>
      <ul>
        {classesDetails.archetypes.map((feature, index) => (
          <li key={index}>
            <strong>{feature.name}:</strong> {feature.desc}
          </li>
        ))}
      </ul>
      <p>
        <strong>Table:</strong> {classesDetails.table}
      </p>
      <Button
        component={Link}
        to="/Classes"
        variant="contained"
        color="primary"
        style={{ marginTop: "2px" }}
      >
        Back to Classes
      </Button>
    </div>
  );
}

export default ClassesDetails;
