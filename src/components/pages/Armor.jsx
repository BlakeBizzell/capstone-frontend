import axios from "axios";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Armor() {
  const [Armor, setArmor] = useState([]);
  const [page] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchArmor = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/armor?page=${page}`
        );
        setArmor((prevItems) => [...prevItems, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching magic items:", error);
      }
    };

    fetchArmor();
  }, [page]);


  const handleSearch = async (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `https://api.open5e.com/Armor?page=1&search=${query}`
      );
      setArmor(response.data.results);
    } catch (error) {
      console.error("Error searching magic items:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Armor List</h1>
      <TextField
        label="Search Armor"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "16px", width: "50%" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Armor.map((item, index) => (
          <div
            key={`${item.slug}-${index}`}
            style={{ width: "30%", margin: "10px", textAlign: "center" }}
          >
            <Link to={`/Armor/${item.slug}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Armor;
