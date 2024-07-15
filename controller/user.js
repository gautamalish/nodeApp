const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.addUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};

exports.replaceUser = (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id });
  res.status(202).json();
};
exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((p) => p.id === id);
  const oldUser = users[userIndex];
  users.splice(userIndex, 1, { ...oldUser, ...req.body });
  res.status(202).json();
};
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(204).json(user);
};
