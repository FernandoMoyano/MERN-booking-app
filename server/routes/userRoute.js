import express from "express";
const router = express.Router();
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
} from "../controllers/userController.js";

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);

export { router as userRoute };
