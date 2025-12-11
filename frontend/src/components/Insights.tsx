/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchInsights } from "../api/api";
import { Link } from "react-router-dom";


export default function InsightsComponent() {
  const [data, setData] = useState<any>(null);
  const [miniBarWidths, setMiniBarWidths] = useState<number[]>([]);
  const [mainBarHeights, setMainBarHeights] = useState<number[]>([]);

  useEffect(() => {
    fetchInsights()
      .then((res) => {
        setData(res);

        setMiniBarWidths(res.insights.map(() => 0));
        setMainBarHeights(res.mainVisual.data.map(() => 0));

        setTimeout(() => {
          setMiniBarWidths(res.insights.map((item: any) => item.value));
          setMainBarHeights(res.mainVisual.data);
        }, 300);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="insights-container">
      <h2 className="headline">{data.headline}</h2>

      <div className="insight-blocks">
        {data.insights.map((item: any, idx: number) => (
          <div key={idx} className="insight-block">
            <p className="insight-text">{item.text}</p>
            <div className="mini-bar">
              <div
                className="mini-bar-fill"
                style={{ width: `${miniBarWidths[idx]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="main-visual">
        <p>Main Visual</p>
        <div className="bar-chart">
          {mainBarHeights.map((v, i) => (
            <div key={i} className="bar-wrapper">
              <div className="bar" style={{ height: `${v}px` }} />
              <span className="bar-value">{v}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
       <Link to="/overview" className="nav-btn">Back</Link>
      </div>
    </div>
  );
}
