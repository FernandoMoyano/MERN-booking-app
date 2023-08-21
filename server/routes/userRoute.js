import express from "express";
const router = express.Router();
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavourites,
  toFav,
} from "../controllers/userController.js";

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFavourites/", getAllFavourites);

export { router as userRoute };
