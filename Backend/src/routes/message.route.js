import express from "express";
import { protectRoute } from "../middleware/auth.midlleware.js";
import { getUsersforSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute,getUsersforSidebar);

export default router;