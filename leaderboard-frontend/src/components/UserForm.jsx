import { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Enter a name");
    addUser(name);
    setName("");
  };

  const formStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    width: "200px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: isHovered ? "#1e7e34" : "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.2s ease",
    boxShadow: isHovered ? "0 4px 10px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.1)",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new user"
        style={inputStyle}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add User
      </button>
    </form>
  );
}
