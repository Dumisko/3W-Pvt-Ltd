import express from "express";
import { claimPoints, getHistory } from "../controllers/claimController.js";

const router = express.Router();

router.post("/", claimPoints);
router.get("/:userId", getHistory);

export default router;
