import { useState } from "react";
import "./ClaimPoints.css";

export default function ClaimPoints({ users, selectedUser, setSelectedUser, claimPoints }) {
  const [isHovered, setIsHovered] = useState(false); // Not needed now, kept as-is

  return (
    <div className="claim-points-container">
      <select
        className="claim-select"
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
        className="claim-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={claimPoints}
      >
        Claim Points
      </button>
    </div>
  );
}
