import { useState } from "react";
import "./UserForm.css";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Enter a name");
    addUser(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new user"
        className="user-form-input"
      />
      <button
        type="submit"
        className={`user-form-button ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add User
      </button>
    </form>
  );
}
