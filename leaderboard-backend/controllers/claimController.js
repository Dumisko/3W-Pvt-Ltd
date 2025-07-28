import User from "../models/User.js";
import History from "../models/History.js";

// ✅ Claim random points
export const claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const randomPoints = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.totalPoints += randomPoints;
    await user.save();

    // Save to history collection
    await History.create({ userId, points: randomPoints });

    // Return updated leaderboard
    const users = await User.find().sort({ totalPoints: -1 });

    res.status(200).json({
      message: `✅ ${randomPoints} points added to ${user.name}`,
      updatedLeaderboard: users,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Get history for a user
export const getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await History.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
