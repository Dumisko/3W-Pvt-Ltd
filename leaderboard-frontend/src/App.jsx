import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Leaderboard from "./components/Leaderboard";
import UserForm from "./components/UserForm";
import ClaimPoints from "./components/ClaimPoints";
import API from "./api";
import "./App.css"; // ✅ import CSS

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (name) => {
    try {
      await API.post("/users", { name });
      fetchUsers();
    } catch (error) {
      alert(error.response?.data?.message || "Error adding user");
    }
  };

  const claimPoints = async () => {
    if (!selectedUser) {
      alert("Please select a user first!");
      return;
    }
    try {
      const res = await API.post("/claim", { userId: selectedUser });
      alert(res.data.message);
      setUsers(res.data.updatedLeaderboard);
    } catch (error) {
      console.error("Error claiming points:", error);
    }
  };

  return (
    <div className="app-container">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          color: "#007bff",
          textShadow: "0px 0px 8px rgba(0,123,255,0.6)",
        }}
      >
        🏆 Leaderboard System
      </motion.h1>

      <UserForm addUser={addUser} />

      <ClaimPoints
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        claimPoints={claimPoints}
      />

      <Leaderboard users={users} />
    </div>
  );
}

export default App;
