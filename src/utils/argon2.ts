import { hash } from "argon2";
import { randomBytes } from "crypto";

const salt = randomBytes(16);

export async function hashPassword(password: string) {
  return hash(password, salt);
}
