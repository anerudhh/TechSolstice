const blockchain = require('./utils/blockchain.js');

// A simple in-memory database for storing user trust scores (in practice, use a real database)
let userTrustScores = {};

function getUserTrustScore(userId) {
    return userTrustScores[userId] || 0; // Default score is 0 if not found
}

function updateUserTrustScore(userId, scoreChange, action) {
    let currentScore = getUserTrustScore(userId);
    let newScore = currentScore + scoreChange;

    // Create the data to store in the blockchain
    const blockData = {
        userId: userId,
        trustScore: newScore,
        action: action,
        timestamp: Date.now(),
    };

    // Add to the blockchain
    blockchain.addBlock(blockData);

    // Update the in-memory trust score (or database in real-world use)
    userTrustScores[userId] = newScore;
    return newScore;
}

module.exports = {
    getUserTrustScore,
    updateUserTrustScore
};
