const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

function getUsers() {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData).users;
}

function saveUsers(users) {
  const updated = JSON.stringify({ users }, null, 2);
  fs.writeFileSync(dbPath, updated);
}

module.exports = {
  getUsers,
  saveUsers
};
