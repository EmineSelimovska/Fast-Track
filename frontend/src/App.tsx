import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverviewComponent from "./components/Overview";
import Navigation from "./components/Navigation";
import InsightsComponent from "./components/Insights";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <Router >
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/overview" element={<OverviewComponent />} />
            <Route path="/insights" element={<InsightsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
