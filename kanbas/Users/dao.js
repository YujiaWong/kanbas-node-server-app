// import db from "../Database/index.js";
// let { users } = db;
import model from "./model.js";

export const createUser = (user) => {
  // const newUser = { ...user, _id: Date.now() };
  // users = [...users, newUser];
  // return newUser;
  delete user._id;
  return model.create(user);
};
export const findAllUsers = () => model.find();
export const findUserById = (userId) =>
  //users.find((user) => user._id === userId);
  model.findById(userId);
export const findUserByUsername = (username) =>
  //users.find((user) => user.username === username);
  model.findOne({ username: username }); //第一个是username属性，第二个是传参，此处两个刚好一致
export const findUserByCredentials = (username, password) =>
  // users.find(
  //   (user) => user.username === username && user.password === password
  // );
  model.findOne({ username: username, password: password });
export const updateUser = (userId, user) =>
  //(users = users.map((u) => (u._id === userId ? user : u)));
  //model.findByIdAndUpdate(userId, user, { new: true }); //用userID找到要跟新的用户，用新的user对象替换老的，new表示如果没找到对应id，支持创建一个全新的
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) =>
  //(users = users.filter((u) => u._id !== userId));
  model.deleteOne({ _id: userId });
export const findUsersByRole = (role) => model.find({ role: role });
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};
