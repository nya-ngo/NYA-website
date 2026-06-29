import User from "../models/User.js";

export async function listUsers() {
  return User.find().sort({ createdAt: -1 });
}

export async function findUserById(id) {
  return User.findById(id);
}

export async function createUser(payload) {
  const user = new User(payload);
  return user.save();
}

export async function updateUser(id, payload) {
  return User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
}

export async function removeUser(id) {
  return User.findByIdAndDelete(id);
}
