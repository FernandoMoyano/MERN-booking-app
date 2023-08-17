import express from "express";
const router = express.Router();
import { bookVisit, createUser } from "../controllers/userController.js";

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);

export { router as userRoute };
