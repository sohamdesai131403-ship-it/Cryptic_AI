import { useEffect } from "react";
import { getAllCrypticData } from "./lib/crypticData";

function App() {
  useEffect(() => {
    async function loadData() {
      try {
        const result = await getAllCrypticData();

        console.log("CRYPTIC AI — SUPABASE DATA");
        console.log("Locations:", result.locations);
        console.log("Alerts:", result.alerts);
        console.log("Cases:", result.cases);
        console.log("Complaints:", result.complaints);
        console.log("Predictions:", result.predictions);
        console.log("Evidence:", result.evidence);
        console.log("Audit Logs:", result.auditLogs);
        console.log("Profiles:", result.profiles);
      } catch (err) {
        console.error("Cryptic AI Supabase error:", err);
      }
    }

    loadData();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <iframe
        src="/legacy/cryptic.html"
        title="Cryptic AI"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}

export default App;