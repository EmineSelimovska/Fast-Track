import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverviewComponent from "./components/Overview";
import Navigation from "./components/Navigation";
import InsightsComponent from "./components/Insights";

function App() {
  return (
    <Router >
      <div className="min-h-screen bg-gray-100 p-6">
        <Navigation />
        <Routes>
          <Route path="/overview" element={<OverviewComponent />} />
            <Route path="/insights" element={<InsightsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
