import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>

        <Navbar />
      <div className="stats">
        <div className="card">
          <h3>{jobs.length}</h3>
          <p>Total Jobs</p>
        </div>

        <div className="card">
          <h3>Active</h3>
          <p>Status</p>
        </div>

        <div className="card">
          <h3>User</h3>
          <p>Logged In</p>
        </div>
      </div>

      <h3>Recent Jobs</h3>

      {jobs.slice(0, 3).map(job => (
        <div className="job-card" key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;