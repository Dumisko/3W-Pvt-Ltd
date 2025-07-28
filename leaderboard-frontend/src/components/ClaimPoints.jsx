import { useState } from "react";

export default function ClaimPoints({ users, selectedUser, setSelectedUser, claimPoints }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const selectStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    minWidth: "200px",
    backgroundColor: "#fff",
    cursor: "pointer",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: isHovered ? "#0056b3" : "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.08)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  };

  return (
    <div style={containerStyle}>
      <select
        style={selectStyle}
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={claimPoints}
      >
        Claim Points
      </button>
    </div>
  );
}
