import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  points: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema);
export default History;
