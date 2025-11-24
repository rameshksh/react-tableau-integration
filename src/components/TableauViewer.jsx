import { useEffect } from 'react';

export default function TableauViewer() {
  const tableauURL = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms?:embed=y";
  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtb2NrLXRhYmxlyb3UtaXNzdWVyIiwic3ViIjoidGVzdC11c2VyQGV4YW1wbGUuY29tIiwiZXhwIjoxNzM1NTk4NDAwLCJ1c2VybmFtZSI6InRlc3QtdXNlciIsInNpdGVJZCI6InRlc3QtdGVuYW50Iiwicm9sZSI6InZpZXdlciJ9.cN9HvgnSo9MEa6vAqZp0tcygVh8xt4gcNAAkFqYu7GM";

  useEffect(() => {
    const vizDiv = document.getElementById("tableauViz");

    const options = {
      height: "800px",
      width: "100%",
      hideTabs: true,
      device: "desktop"
    };

    new window.tableau.Viz(vizDiv, tableauURL, options);
  }, []);

  return (
    <div>
      <h2>Tableau Report Integration Test</h2>
      <div id="tableauViz" />
    </div>
  );
}