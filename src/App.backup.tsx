import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

type Location = {
  id: string;
  name: string;
  city: string;
  risk_score: number;
  crime_category: string;
};

function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocations() {
      const { data, error } = await supabase
        .from("locations")
        .select("id, name, city, risk_score, crime_category")
        .order("id");

      if (error) {
        console.error("Failed to load locations:", error);
        setLoading(false);
        return;
      }

      setLocations(data || []);
      setLoading(false);
    }

    loadLocations();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Cryptic AI</h1>

      <p>Predictive Cybercrime Intelligence Command Center</p>

      <hr />

      <h2>Risk Locations</h2>

      {loading ? (
        <p>Loading locations...</p>
      ) : (
        <div>
          {locations.map((location) => (
            <div
              key={location.id}
              style={{
                padding: "15px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <strong>{location.name}</strong>

              <div>
                {location.city} — Risk Score:{" "}
                <strong>{location.risk_score}</strong>
              </div>

              <div>Category: {location.crime_category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;