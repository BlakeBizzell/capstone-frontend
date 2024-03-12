import axios from "axios";
import  { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function MagicItems() {
  const [magicItems, setMagicItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMagicItems = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/magicitems?page=${page}`
        );
        setMagicItems((prevItems) => [...prevItems, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching magic items:", error);
      }
    };

    fetchMagicItems();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = async (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `https://api.open5e.com/magicitems?page=1&search=${query}`
      );
      setMagicItems(response.data.results);
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
      <h1 style={{ textAlign: "center" }}>Magic Item List</h1>
      <TextField
        label="Search Magic Items"
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
        {magicItems.map((item, index) => (
          <div
            key={`${item.slug}-${index}`}
            style={{ width: "30%", margin: "10px", textAlign: "center" }}
          >
            <Link to={`/magicitems/${item.slug}`}>{item.name}</Link>
          </div>
        ))}
      </div>
      {page < 3 && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      )}
    </div>
  );
}

export default MagicItems;
