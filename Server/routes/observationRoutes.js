import express from "express";
import {
  createObservation,
  getAllObservations,
  getUserObservations,
} from "../controllers/observationController.js";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js"; // Multer config

const router = express.Router();

// Create a new observation (with image upload)
router.post("/",protect, upload.single("image"), createObservation);

router.get("/user", protect, (req,res)=>{
  console.log("User ID:", req.user._id); // Log the user ID for debugging
  getUserObservations(req, res);
});
// Get all observations
router.get("/", protect, getAllObservations);

// Get nearby observations (geo query)
// router.get("/nearby", protect, getNearbyObservations);

export default router;
// This code defines the routes for creating and retrieving plant observations.