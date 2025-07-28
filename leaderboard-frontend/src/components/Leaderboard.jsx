// import { motion, AnimatePresence } from "framer-motion";

// export default function Leaderboard({ users }) {
//   const containerStyle = {
//     marginTop: "20px",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     marginBottom: "15px",
//     fontSize: "22px",
//     fontWeight: "bold",
//     color: "#333",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     overflow: "hidden",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
//   };

//   const thStyle = {
//     backgroundColor: "#007bff",
//     color: "#fff",
//     padding: "12px",
//     textAlign: "left",
//     fontSize: "16px",
//   };

//   const tdStyle = {
//     padding: "12px",
//     borderBottom: "1px solid #ddd",
//     fontSize: "15px",
//     color: "#333",
//   };

//   const rowVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.08, type: "spring", stiffness: 120 },
//     }),
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Leaderboard</h2>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Rank</th>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Total Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           <AnimatePresence>
//             {users.map((user, index) => (
//               <motion.tr
//                 key={user._id}
//                 variants={rowVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={index}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 whileHover={{
//                   scale: 1.02,
//                   backgroundColor: "#e3f2fd",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                   transition: { type: "spring", stiffness: 200, damping: 12 },
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{
//                   backgroundColor: index % 2 !== 0 ? "#f8f9fa" : "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 <td style={tdStyle}>{index + 1}</td>
//                 <td style={tdStyle}>{user.name}</td>
//                 <td style={tdStyle}>{user.totalPoints}</td>
//               </motion.tr>
//             ))}
//           </AnimatePresence>
//         </tbody>
//       </table>
//     </div>
//   );
// }


import { useState } from "react";

export default function Leaderboard({ users }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  const containerStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  };

  const thStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
    fontSize: "16px",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    fontSize: "15px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const rowBaseStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const rowHoverEffect = {
    backgroundColor: "#f1f7ff",
    transform: "scale(1.01)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Leaderboard</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>User</th>
            <th style={thStyle}>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              style={{
                ...rowBaseStyle,
                ...(hoveredRow === index ? rowHoverEffect : {}),
              }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td style={{ padding: "10px" }}>{index + 1}</td>
              <td style={tdStyle}>
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "2px solid #ddd",
                  }}
                />
                {user.name}
              </td>
              <td style={{ padding: "10px" }}>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
