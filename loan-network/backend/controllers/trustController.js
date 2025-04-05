const { loadUsers, saveUsers } = require('../config/db');

exports.getTrustScore = (req, res) => {
  const { userId } = req.params;
  const users = loadUsers();
  const user = users.find(u => u.id == userId);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json({ trustScore: user.trustScore });
};

exports.updateTrustScore = (req, res) => {
  const { userId, delta } = req.body;
  let users = loadUsers();
  const user = users.find(u => u.id == userId);
  if (!user) return res.status(404).json({ msg: 'User not found' });

  user.trustScore = Math.max(0, Math.min(100, user.trustScore + delta));
  saveUsers(users);
  res.json({ msg: 'Trust score updated', trustScore: user.trustScore });
};
