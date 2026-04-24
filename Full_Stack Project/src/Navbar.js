import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Jobs</h2>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;