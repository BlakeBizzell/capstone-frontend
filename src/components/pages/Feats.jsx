import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Feats() {
  const [feats, setFeats] = useState([]);
  const page = 1;

  useEffect(() => {
    const fetchFeats = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/feats?page=${page}`
        );
        setFeats(response.data.results);
      } catch (error) {
        console.error("Error fetching Feats:", error);
      }
    };

    fetchFeats();
  }, [page]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Feats List</h1>

      <table
        style={{
          width: "98%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Description
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Prerequisite
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Document Title
            </th>
            
          </tr>
        </thead>
        <tbody>
          {feats.map((feat, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {feat.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {feat.desc}
                <ul>
                  {feat.effects_desc.map((effect, i) => (
                    <li key={i}>{effect}</li>
                  ))}
                </ul>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {feat.prerequisite}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {feat.document__title}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <Button
        variant="contained"
        color="primary"
        style={{ alignSelf: "center", marginTop: "16px" }}
        component={Link}
        to={"/Dashboard"}
      >
        Back to Dashboard
      </Button>
    </div>
  );
}

export default Feats;
