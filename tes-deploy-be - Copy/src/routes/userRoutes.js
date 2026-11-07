import { Router } from "express";
import { storeUser } from "../controllers/UserController.js";

const router = Router();
router.post("/", storeUser);

export default router;
