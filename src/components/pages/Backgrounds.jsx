import axios from "axios";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Backgrounds() {
  const [Backgrounds, setBackgrounds] = useState([]);
  const [page] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBackgrounds = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/backgrounds?page=${page}`
        );
        setBackgrounds((prevItems) => [...prevItems, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching Backgrounds:", error);
      }
    };

    fetchBackgrounds();
  }, [page]);


  const handleSearch = async (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `https://api.open5e.com/backgrounds?page=1&search=${query}`
      );
      setBackgrounds(response.data.results);
    } catch (error) {
      console.error("Error searching Backgrounds:", error);
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
      <h1 style={{ textAlign: "center" }}>Backgrounds List</h1>
      <TextField
        label="Search Backgrounds"
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
        {Backgrounds.map((item, index) => (
          <div
            key={`${item.slug}-${index}`}
            style={{ width: "30%", margin: "10px", textAlign: "center" }}
          >
            <Link to={`/Backgrounds/${item.slug}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Backgrounds;
