import { Router } from "express";
import { createAccountHandler } from "../controllers/auth.controller.js";

const authRouter = Router();

// prefix: /auth
authRouter.post("/signup", createAccountHandler);

export default authRouter;