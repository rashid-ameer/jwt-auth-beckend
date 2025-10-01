import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Username is required."
          : "Username must be string.",
    })
    .min(3, { error: "Username must be atleast 3 characters." }),
  email: z.email({
    error: (issue) => {
      if (issue.input === undefined) {
        return "Email is required.";
      }
      if (issue.code === "invalid_type") {
        return "Email must be string.";
      }

      return "Invalid email.";
    },
  }),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Password is required."
          : "Password must be a string",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
      error: () =>
        "Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, 1 digit, and 1 special character.",
    }),
});
