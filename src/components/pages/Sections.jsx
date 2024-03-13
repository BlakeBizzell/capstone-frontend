import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Typography, TextField } from "@mui/material";

function Sections() {
  const [sections, setSections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          `https://api.open5e.com/sections`
        );
        setSections(response.data.results);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  const filteredSections = sections.filter((section) =>
    section.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDescription = (description) => {
    return description.split("\n").map((item, key) => {
      if (item.startsWith("##")) {
        return <Typography variant="h3" key={key}>{item.replace("##", "")}</Typography>;
      } else if (item.startsWith("**")) {
        return <Typography variant="h5" key={key}>{item.replace("**", "")}</Typography>;
      } else {
        return <Typography variant="body1" key={key}>{item}</Typography>;
      }
    });
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "16px" }}>
      <div style={{ position: "fixed", top: "80px", left: 0, right: 0, zIndex: 1000, backgroundColor: "#fff", borderBottom: "1px solid #ccc" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ paddingTop: "160px" }}>
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>Sections List</h1>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {filteredSections.map((section, index) => (
            <div key={index} style={{ marginBottom: "40px", maxWidth: "800px" }}>
              <Typography variant="h4">{section.name}</Typography>
              <div style={{ marginTop: "16px" }}>{renderDescription(section.desc)}</div>
              <Typography variant="body1" style={{ marginTop: "16px" }}>Parent: {section.parent}</Typography>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={section.document__url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "16px" }}
              >
                More Info
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 1000, right: 0, zIndex: 999, backgroundColor: "#fff" }}>
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
    </div>
  );
}

export default Sections;
