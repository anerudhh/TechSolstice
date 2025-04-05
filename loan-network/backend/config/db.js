const fs = require('fs');
const path = require('path');

const loadJSON = (file) => {
  const dataPath = path.join(__dirname, '../data', file);
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
};

const saveJSON = (file, data) => {
  const dataPath = path.join(__dirname, '../data', file);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = {
  loadUsers: () => loadJSON('dummy_users.json'),
  saveUsers: (data) => saveJSON('dummy_users.json', data),
  loadLoans: () => loadJSON('dummy_loans.json'),
  saveLoans: (data) => saveJSON('dummy_loans.json', data)
};
