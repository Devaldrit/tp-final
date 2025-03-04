import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await registerUser(email, password);
    res.status(201).json({ message: "Utilisateur créé", userId: user.id });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
