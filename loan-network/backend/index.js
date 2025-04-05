const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Step-by-step debug logs
console.log("🔧 Starting server...");

// Load environment variables
dotenv.config();
console.log("✅ .env loaded");

// Middleware
app.use(cors());
app.use(express.json());
console.log("✅ Middleware configured");

// Route imports with error catching
try {
  const loanRoutes = require('./routes/loanRoutes');
  app.use('/api/loans', loanRoutes);
  console.log("✅ loanRoutes loaded");
} catch (err) {
  console.error("❌ Error loading loanRoutes:", err);
}

// Test root route
app.get('/', (req, res) => {
  res.send('🚀 Loan Network Backend is running');
});

// Port Setup
const portno = process.env.PORT || 3000;
app.listen(portno, () => {
  console.log(`✅ Server running on http://localhost:${portno}`);
});
