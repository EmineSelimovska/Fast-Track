/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchOverview } from "../api/api";

export default function OverviewComponent() {
  const [data, setData] = useState<any>(null);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    fetchOverview()
     .then((res) => {
        setData(res);
        setTimeout(() => setFillWidth(res.value), 300); 
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

 return (
    <div className="overview-container">
  <h2>Strategy in Action</h2>
  
  <div className="score-status">
    <div className="score">{data.value}%</div>
    <span className={`status-label status-${data.status.toLowerCase()}`}>
      {data.status}
    </span>
  </div>

  <div className="comparative-metric">{data.comparativeMetric}</div>

  <div className="score-bar">
    <div
      className="score-bar-fill"
      style={{ width: `${fillWidth}%` }} 
    />
  </div>
</div>

  );
}
