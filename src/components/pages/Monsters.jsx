import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

function MonsterList() {
  const [monsterData, setMonsterData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData = localStorage.getItem("monsterData");
        if (cachedData) {
          setMonsterData(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            `https://api.open5e.com/monsters?page=${page}`
          );
          setMonsterData(response.data.results);
          localStorage.setItem(
            "monsterData",
            JSON.stringify(response.data.results)
          );
        }
      } catch (error) {
        console.error("Error fetching monster data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = async (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `https://api.open5e.com/monsters?search=${query}`
      );
      setMonsterData(response.data.results);
      localStorage.setItem(
        "monsterData",
        JSON.stringify(response.data.results)
      );
    } catch (error) {
      console.error("Error searching monsters:", error);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Monster List</h1>
      <TextField
        label="Search Monsters"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "16px", width: "50%", alignSelf: "center" }}
      />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>CR</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Size</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Hit Points
            </th>
          </tr>
        </thead>
        <tbody>
          {monsterData.map((monster, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <Link
                  to={`/monsters/${monster.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {monster.name}
                </Link>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {monster.type}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {monster.challenge_rating}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {monster.size}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {monster.hit_points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        variant="contained"
        color="primary"
        style={{ alignSelf: "center", marginTop: "auto" }}
        onClick={handleNextPage}
      >
        Next Page
      </Button>
    </div>
  );
}

export default MonsterList;
