import User from "../models/User.js";

// ✅ Get all users (sorted by total points)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Add new user
export const addUser = async (req, res) => {
  // try {
  //   const { name } = req.body;
  //   if (!name) return res.status(400).json({ message: "Name is required" });

  //   const existing = await User.findOne({ name });
  //   if (existing) return res.status(400).json({ message: "User already exists" });

  //   const newUser = await User.create({ name });
  //   res.status(201).json(newUser);
  // } catch (error) {
  //   res.status(500).json({ message: "Server Error", error });
  // }


    try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    // Generate avatar from DiceBear API
    const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`;

    const newUser = new User({ name, totalPoints: 0, avatarUrl });
    await newUser.save();

    res.status(201).json({ message: "User added", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error adding user" });
  }
};
