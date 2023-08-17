import express from "express";
const router = express.Router();
import {
  bookVisit,
  createUser,
  getAllBookings,
} from "../controllers/userController.js";

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getAllBookings);

export { router as userRoute };
