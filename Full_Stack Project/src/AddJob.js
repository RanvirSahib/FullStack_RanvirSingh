import { useState } from "react";
import axios from "axios";

function AddJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    await axios.post("http://localhost:8080/add-job", {
      title,
      description
    });

    alert("Job Added");

    // 👇 ADD THIS LINE HERE
    window.location.reload();
  };

  return (
    <div className = "job-card">
      <h3>Add Job</h3>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAdd}>Add Job</button>
    </div>
  );
}

export default AddJob;