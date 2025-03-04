import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};
