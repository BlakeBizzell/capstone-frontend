import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Races() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await axios.get(`https://api.open5e.com/races`);
        setRaces(response.data.results);
      } catch (error) {
        console.error("Error fetching races:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRaces();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <h1 style={{ textAlign: "center" }}>Races List</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {races.map((race, index) => (
          <div
            key={`${race.slug}-${index}`}
            style={{ width: "30%", margin: "10px", textAlign: "center" }}
          >
            <Link to={`/races/${race.slug}`}>{race.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Races;
