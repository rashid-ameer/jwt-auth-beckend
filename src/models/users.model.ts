import { Schema, model, Document } from "mongoose";
import { hashPassword } from "../utils/argon2.js";

export interface IUser {
  username: string;
  email: string;
  password: string;
  is_verified: boolean;
  profile_image?: string;
  created_at: Date;
  updated_at: Date;
}

interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_verified: { type: Boolean, required: true, default: false },
    profile_image: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }

  next();
});

const UserModel = model<UserDocument>("User", userSchema);
export default UserModel;
