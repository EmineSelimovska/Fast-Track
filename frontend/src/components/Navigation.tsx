import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
     const location = useLocation();
  return (
    <nav className="nav">
      <Link to="/overview" className={location.pathname === "/overview" ? "active" : ""} >
        Overview
      </Link>
      <Link to="/insights"  className={location.pathname === "/insights" ? "active" : ""} >
        Insights
      </Link>
    </nav>
  );
}
