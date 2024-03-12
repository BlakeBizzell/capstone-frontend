import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

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
        <strong>Size:</strong> {monsterDetails.size}
      </p>
      <p>
        <strong>Alignment:</strong> {monsterDetails.alignment}
      </p>
      <p>
        <strong>Armor Class:</strong> {monsterDetails.armor_class} (
        {monsterDetails.armor_desc})
      </p>
      <p>
        <strong>Hit Points:</strong> {monsterDetails.hit_points} (
        {monsterDetails.hit_dice})
      </p>
      <p>
        <strong>Speed:</strong>
        {Object.entries(monsterDetails.speed).map(([type, value]) => (
          <span key={type}>
            {" "}
            {type}: {value},
          </span>
        ))}
      </p>
      <p>
        <strong>Saving Throws:</strong>{" "}
        {JSON.stringify(monsterDetails.saving_throws)}
      </p>
      <p>
        <strong>Skills:</strong> {JSON.stringify(monsterDetails.skills)}
      </p>
      <p>
        <strong>Ability Scores:</strong> &nbsp;
        <span>
          <strong>Strength:</strong> {monsterDetails.strength}, &nbsp;
          <strong>Dexterity:</strong> {monsterDetails.dexterity}, &nbsp;
          <strong>Constitution:</strong> {monsterDetails.constitution}, &nbsp;
          <strong>Intelligence:</strong> {monsterDetails.intelligence}, &nbsp;
          <strong>Wisdom:</strong> {monsterDetails.wisdom}, &nbsp;
          <strong>Charisma:</strong> {monsterDetails.charisma}
        </span>
      </p>
      <p>
        <strong>Damage Resistances:</strong> {monsterDetails.damage_resistances}
      </p>
      <p>
        <strong>Damage Immunities:</strong> {monsterDetails.damage_immunities}
      </p>
      <p>
        <strong>Condition Immunities:</strong>{" "}
        {monsterDetails.condition_immunities}
      </p>
      <p>
        <strong>Senses:</strong> {monsterDetails.senses}
      </p>
      <p>
        <strong>Languages:</strong> {monsterDetails.languages}
      </p>
      <p>
        <strong>Challenge Rating:</strong> {monsterDetails.challenge_rating} (
        {monsterDetails.cr})
      </p>
      <p>
        <strong>Actions:</strong>
        <ul>
          {monsterDetails.actions.map((action, index) => (
            <li key={index}>
              <strong>{action.name}:</strong> {action.desc}
            </li>
          ))}
        </ul>
      </p>
      <p>
        <strong>Special Abilities:</strong>
        <ul>
          {monsterDetails.special_abilities.map((ability, index) => (
            <li key={index}>
              <strong>{ability.name}:</strong> {ability.desc}
            </li>
          ))}
        </ul>
      </p>
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
