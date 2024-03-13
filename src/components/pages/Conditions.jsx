import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Conditions() {
  const [conditions, setConditions] = useState([]);
  const page = 1;

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/conditions?page=${page}`
        );
        setConditions(response.data.results);
      } catch (error) {
        console.error("Error fetching Conditions:", error);
      }
    };

    fetchConditions();
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
      <h1 style={{ textAlign: "center" }}>Conditions List</h1>

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
              Document Title
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {conditions.map((condition, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {condition.slug}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {condition.desc}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {condition.document__title}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <a
                  href={condition.document__url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
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

export default Conditions;
