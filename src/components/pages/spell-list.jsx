import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function SpellList() {
  const [spellData, setSpellData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/spells?page=${page}`
        );
        setSpellData(response.data.results);
      } catch (error) {
        console.error("Error fetching spell data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
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
      <h1 style={{ textAlign: "center" }}>Spell List </h1>
      <table
        style={{
          width: "100%",
          height: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              School
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Level</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Components
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Class</th>
          </tr>
        </thead>
        <tbody>
          {spellData.map((spell, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <Link
                  to={`/spells/${spell.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {spell.name}
                </Link>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {spell.school}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {spell.level}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {spell.components}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {spell.dnd_class}
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

export default SpellList;
