import React, { useState } from "react";

function StudentManager() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [action, setAction] = useState("");

  const handleAddStudent = () => {
    if (name && email) {
      setStudents([...students, { name, email }]);
      setName("");
      setEmail("");
      alert("Student added successfully!");
    } else {
      alert("Please fill in both name and email!");
    }
  };

  const handleRemoveStudent = () => {
    const studentIndex = students.findIndex(
      (student) => student.name === name && student.email === email
    );
    if (studentIndex !== -1) {
      const updatedList = [...students];
      updatedList.splice(studentIndex, 1);
      setStudents(updatedList);
      setName("");
      setEmail("");
      alert("Student removed successfully!");
    } else {
      alert("Student not found!");
    }
  };

  const handleDisplayStudents = () => {
    if (students.length === 0) {
      alert("No students in the list.");
    } else {
      alert(
        "Students:\n" +
          students.map((student) => `${student.name} (${student.email})`).join("\n")
      );
    }
  };

  const handleAction = () => {
    switch (action) {
      case "1":
        handleAddStudent();
        break;
      case "2":
        handleRemoveStudent();
        break;
      case "3":
        handleDisplayStudents();
        break;
      default:
        alert("Invalid choice. Please enter 1, 2, or 3.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Manager</h1>
      <label>
        Enter Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br />
      <label>
        Enter Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        />
      </label>
      <br />
      <label>
        Choose Action (1: Add, 2: Remove, 3: Display):
        <input
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        />
      </label>
      <br />
      <button onClick={handleAction} style={{ marginTop: "10px" }}>
        Submit
      </button>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} ({student.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;
