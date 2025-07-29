import { useState } from "react";
import "./Leaderboard.css";

export default function Leaderboard({ users }) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const topThree = users.slice(0, 3);
  const others = users.slice(3);

  const topUserCard = (user, rank, size, color) => (
    <div
      key={user._id}
      className="top-user-card"
      style={{ width: `${size + 40}px` }}
    >
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="top-user-avatar"
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
        }}
      />
      <h3 style={{ margin: "8px 0 4px 0", fontSize: "16px" }}>{user.name}</h3>
      <p style={{ fontWeight: "bold", fontSize: "14px" }}>
        {user.totalPoints} ⭐
      </p>
      <span
        className="top-user-rank"
        style={{ background: color }}
      >
        #{rank}
      </span>
    </div>
  );

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-heading">Leaderboard</h2>

      <div className="top-three-container">
        {topThree[1] && topUserCard(topThree[1], 2, 70, "#C0C0C0")}
        {topThree[0] && topUserCard(topThree[0], 1, 90, "#FFD700")}
        {topThree[2] && topUserCard(topThree[2], 3, 70, "#CD7F32")}
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {others.map((user, index) => (
            <tr
              key={user._id}
              className="leaderboard-row"
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{index + 4}</td>
              <td className="user-cell">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="user-avatar"
                />
                {user.name}
              </td>
              <td>{user.totalPoints} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
