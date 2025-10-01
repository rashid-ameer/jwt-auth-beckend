import { type Request, type Response } from "express";
import { signupSchema } from "../validations/auth.validation.js";
import { ZodError } from "zod";

export function createAccountHandler(req: Request, res: Response) {
  try {
    // validate a request
    const request = signupSchema.parse(req.body);
    res.json({ success: true, user: request });
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json({
          error: true,
          message: error.issues[0]?.message || "Invalid data",
        });
      return;
    }

    res.status(500).json({ error: true, message: "Internal Server Error." });
  }
}
