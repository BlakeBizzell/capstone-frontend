import React from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  IconButton,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useSaveTreasureInfoMutation } from "../../api/capstoneApi";

class TreasureGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinAmount: 0,
      gemAmount: 0,
      artObjectAmount: 0,
      magicItemAmount: 0,
      armor: 0,
      weapon: 0,
      treasure: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  generateTreasure = async () => {
    const treasureTypes = [
      {
        type: "Coins",
        min: 10,
        max: 1000,
        unit: "gold pieces",
        amount: this.state.coinAmount,
      },
      {
        type: "Gems",
        options: ["Ruby", "Emerald", "Diamond", "Sapphire", "Topaz"],
        amount: this.state.gemAmount,
      },
      {
        type: "Art Objects",
        options: ["Statuette", "Jewelry", "Crown", "Relic", "Painting"],
        amount: this.state.artObjectAmount,
      },
      {
        type: "Magic Items",
        url: "https://api.open5e.com/v1/magicitems/",
        amount: this.state.magicItemAmount,
      },
      {
        type: "Armor",
        url: "https://api.open5e.com/v1/armor/",
        amount: this.state.armor,
        unit: "piece(s)",
      },
      {
        type: "Weapon",
        url: "https://api.open5e.com/v1/weapons/",
        amount: this.state.weapon,
        unit: "piece(s)",
      },
    ];

    let treasure = [];

    for (const type of treasureTypes) {
      if (type.amount && parseInt(type.amount) > 0) {
        if (type.type === "Coins") {
          const coinAmount =
            Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;
          treasure.push({
            type: type.type,
            amount: coinAmount,
            unit: type.unit,
          });
        } else if (type.url) {
          try {
            const response = await axios.get(type.url);
            const data = response.data;
            for (let i = 0; i < type.amount; i++) {
              const randomIndex = Math.floor(
                Math.random() * data.results.length
              );
              const item = data.results[randomIndex];
              treasure.push({ type: type.type, name: item.name });
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        } else if (type.options && type.options.length > 0) {
          for (let i = 0; i < type.amount; i++) {
            const randomIndex = Math.floor(Math.random() * type.options.length);
            const itemName = type.options[randomIndex];
            treasure.push({ type: type.type, name: itemName });
          }
        }
      }
    }

    this.setState({ treasure });
  };

  clearfield = () => {
    this.setState({
      coinAmount: 0,
      gemAmount: 0,
      artObjectAmount: 0,
      magicItemAmount: 0,
      armor: 0,
      weapon: 0,
      treasure: [],
    });
  };

  saveItem = async (index) => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User ID not found in local storage.");
        return;
      }

      const treasureData = this.state.treasure[index];
      const { type, amount, unit, name } = treasureData;


      const treasureItemData = {
        type,
        amount,
        unit,
        name,
        userId, 
      };


      await this.props.saveTreasureInfo(treasureItemData); 
    } catch (error) {
      console.error("Error saving treasure information:", error);
    }
  };

  render() {
    return (
      <Container sx={{ bgcolor: "grey", p: 3, ml: 3, borderRadius: 8 }}>
        <Typography variant="h3" gutterBottom>
          Treasure Generator
        </Typography>
        <Button
          variant="contained"
          onClick={this.generateTreasure}
          style={{ marginBottom: "20px" }}
        >
          Generate Treasure
        </Button>
        <Button
          variant="contained"
          onClick={this.clearfield}
          style={{ marginBottom: "20px", marginLeft: "20px" }}
        >
          Clear
        </Button>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            label="Coins"
            type="number"
            name="coinAmount"
            value={this.state.coinAmount}
            onChange={this.handleInputChange}
            style={{ marginRight: "5px" }}
          />
          <TextField
            label="Gems"
            type="number"
            name="gemAmount"
            value={this.state.gemAmount}
            onChange={this.handleInputChange}
            style={{ marginRight: "5px" }}
          />
          <TextField
            label="Art Objects"
            type="number"
            name="artObjectAmount"
            value={this.state.artObjectAmount}
            onChange={this.handleInputChange}
            style={{ marginRight: "5px" }}
          />
          <TextField
            label="Magic Items"
            type="number"
            name="magicItemAmount"
            value={this.state.magicItemAmount}
            onChange={this.handleInputChange}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            label="Armor"
            type="number"
            name="armor"
            value={this.state.armor}
            onChange={this.handleInputChange}
            style={{ marginRight: "5px" }}
          />
          <TextField
            label="Weapon"
            type="number"
            name="weapon"
            value={this.state.weapon}
            onChange={this.handleInputChange}
            style={{ marginRight: "5px" }}
          />
        </div>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Treasure:
        </Typography>
        <List>
          {this.state.treasure.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.type}: ${
                  item.amount ? `${item.amount} ${item.unit}` : item.name
                }`}
              />
              <IconButton onClick={() => this.saveItem(index)}>
                <SaveIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}


const TreasureGeneratorWithMutation = () => {
  const [saveTreasureInfo] = useSaveTreasureInfoMutation();
  return <TreasureGenerator saveTreasureInfo={saveTreasureInfo} />;
};

export default TreasureGeneratorWithMutation;