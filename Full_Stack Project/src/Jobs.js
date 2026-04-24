import JobList from "./JobList";
import AddJob from "./AddJob";
import Navbar from "./Navbar";

function Jobs() {
    return (
        <div className = "container">
            <h2>Jobs Page</h2>
            <Navbar />
            <AddJob />
            <JobList />
        </div>
    );
}

export default Jobs;