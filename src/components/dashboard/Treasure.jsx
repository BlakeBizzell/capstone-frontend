import React from "react";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Resizable } from "react-resizable";
import Draggable from "react-draggable";

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
      width: 500, 
      height: 400, 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  generateTreasure = () => {
    const treasureTypes = [
      {
        type: "Coins",
        min: 10,
        max: 100,
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
        options: ["Statuette", "Jewelry", "Crown", "Relic"],
        amount: this.state.artObjectAmount,
      },
      {
        type: "Magic Items",
        options: [
          "Potion of Healing",
          "Scroll of Fireball",
          "Bag of Holding",
          "Cloak of Invisibility",
        ],
        amount: this.state.magicItemAmount,
      },
      {
        type: "Armor",
        options: ["Plate Armor", "Chain Mail", "Leather Armor", "Scale Mail"],
        amount: this.state.armor,
        unit: "piece(s)", 
      },
      {
        type: "Weapon",
        options: ["Longsword", "Shortsword", "Battleaxe", "Warhammer"],
        amount: this.state.weapon,
        unit: "piece(s)", 
      },
    ];
  
    let treasure = [];
  
    treasureTypes.forEach((type) => {
      if (type.amount && parseInt(type.amount) > 0) {
        let item = { type: type.type };
  
        if (type.amount && parseInt(type.amount) > 0) {
          item.amount = type.amount;
          item.unit = type.unit || "gold pieces";
          treasure.push(item);
        } else if (type.options && type.options.length > 0) {
          const randomIndex = Math.floor(Math.random() * type.options.length);
          item.name = type.options[randomIndex];
          treasure.push(item);
        }
      }
    });
  
    this.setState({ treasure });
  };
  

  handleResize = (event, { size }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <Draggable>
        <Resizable
          width={this.state.width}
          height={this.state.height}
          onResize={this.handleResize}
          minConstraints={[300, 200]} 
          maxConstraints={[800, 600]} 
        >
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
                </ListItem>
              ))}
            </List>
          </Container>
        </Resizable>
      </Draggable>
    );
  }
}

export default TreasureGenerator;
