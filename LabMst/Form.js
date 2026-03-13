import React, { useState } from "react";
    
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => { 
    event.preventDefault();

    setMessage("Data Saved Successfully");
  };

  return (
    <div style = {{padding: "20px"}}>
      <h2>User Form</h2>
      <form onSubmit = {handleSubmit}>
        <label>Name</label><br></br>
        <input
          type = "text"
          value = {name}
          onChange = {(e) => setName(e.target.value)}
        />
        <br></br>

        <label>Email</label><br></br>
        <input
          type = "email"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <br></br>

        <label>Age</label><br></br>
        <input
          type = "number"
          value = {age}
          onChange = {(e) => setAge(e.target.value)}
        />
        <br></br>

        <button type = "submit">Submit</button>
      </form>
      <p>{message}</p>

    </div>
  );
}

    export default Form;