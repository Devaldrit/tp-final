import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../repositories/userRepository.js";

export const registerUser = async (email, password) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Utilisateur déjà existant");
  }
  return await createUser({ email, password });
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Email ou mot de passe incorrect");
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};
