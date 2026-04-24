import axios from "axios";
import { useEffect, useState } from "react";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Job List</h2>

        {jobs.map(job => (
          <div className = "job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))}
    </div>
  );
}

export default JobList;