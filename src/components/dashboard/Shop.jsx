
import { useState } from 'react';
import { Typography, Box, Button } from "@mui/material";

const GoldPiece = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [items, setItems] = useState([]);

  const generateItems = (shop) => {
    let newItems = [];
    const blacksmithItems = [
      { name: "Longsword", price: 15 },
      { name: "Chainmail", price: 75 },
      { name: "Warhammer", price: 25 },
      // Add more blacksmith items as needed
    ];

    const magicShopItems = [
      { name: "Potion of Healing", price: 50 },
      { name: "Scroll of Fireball", price: 150 },
      { name: "Ring of Protection", price: 200 },
      // Add more magic shop items as needed
    ];

    const generalStoreItems = [
      { name: "Rations (1 day)", price: 5 },
      { name: "Torch", price: 1 },
      { name: "Backpack", price: 2 },
      // Add more general store items as needed
    ];

    switch (shop) {
      case "Blacksmith":
        newItems = blacksmithItems;
        break;
      case "Magic Shop":
        newItems = magicShopItems;
        break;
      case "General Store":
        newItems = generalStoreItems;
        break;
      default:
        newItems = [];
        break;
    }

    setItems(newItems);
  };

  return (
    <Box sx={{ bgcolor: "grey", p: 3, ml: 3, borderRadius: 8, overflow: "auto", resize: "both"  }}>
      <Typography variant="h4">Random Items for Sale</Typography>
      <Box>
        <Button variant="contained" onClick={() => { setSelectedShop("Blacksmith"); generateItems("Blacksmith") }}>Generate Blacksmith Items</Button>
        <Button variant="contained" onClick={() => { setSelectedShop("Magic Shop"); generateItems("Magic Shop") }}>Generate Magic Shop Items</Button>
        <Button variant="contained" onClick={() => { setSelectedShop("General Store"); generateItems("General Store") }}>Generate General Store Items</Button>
      </Box>
      {selectedShop && (
        <Box>
          <Typography variant="h5">{selectedShop} Items:</Typography>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name} - {item.price} gp</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default GoldPiece;