let users = []; // In-memory user "database"

// Register a new user
function registerUser({ name, phone, isLender }) {
  const user = {
    id: users.length + 1,
    name,
    phone,
    isLender: isLender || false,
    trustScore: 50,        // Start everyone neutral
    createdAt: Date.now(),
  };

  users.push(user);
  return user;
}

// Get all users
function getAllUsers() {
  return users;
}

// Find user by ID
function getUserById(userId) {
  return users.find((u) => u.id === userId);
}

// Find user by phone (used for login)
function getUserByPhone(phone) {
  return users.find((u) => u.phone === phone);
}

// Update trust score
function updateTrustScore(userId, newScore) {
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.trustScore = newScore;
    return user;
  }
  return null;
}

// Clear users (for testing/reset)
function clearUsers() {
  users = [];
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  getUserByPhone,
  updateTrustScore,
  clearUsers,
};
