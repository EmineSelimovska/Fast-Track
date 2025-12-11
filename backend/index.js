const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/overview", (req, res) => {
  const value = 54; 

  let status = "Average";
  if (value >= 75) status = "Strong";
  else if (value <= 50) status = "Critical";

  res.json({
    title: "Strategy in Action",
    value,
    status,
    comparativeMetric: "15% below benchmark",
  });
});

app.get("/insights", (req, res) => {
   res.json({
    headline: "Key Insights from Strategy Analysis",
    insights: [
      { text: "Revenue growth is above expectations", value: 70 },
      { text: "Customer churn decreased slightly", value: 45 },
      { text: "Operational efficiency improved", value: 60 }
    ],
    mainVisual: { type: "bar", data: [70, 45, 60] }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
