import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/documents?page=${page}`
        );
        setDocuments(response.data.results);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
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
      <h1 style={{ textAlign: "center" }}>Resource List</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              License
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Organization
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.title}
                </a>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {document.license}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {document.organization}
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
        Back to DashBoard
      </Button>
    </div>
  );
}

export default Documents;
