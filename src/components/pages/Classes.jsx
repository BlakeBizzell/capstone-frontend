import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`https://api.open5e.com/classes`);
        setClasses(response.data.results);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
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
      <h1 style={{ textAlign: "center" }}>Classes List</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {classes.map((cls, index) => (
          <div
            key={`${cls.slug}-${index}`}
            style={{ width: "30%", margin: "10px", textAlign: "center" }}
          >
            <Link to={`/classes/${cls.slug}`}>{cls.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
