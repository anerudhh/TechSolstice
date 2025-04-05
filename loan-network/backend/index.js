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
  const userRoutes = require('./routes/userRoutes');
  app.use('/api/users', userRoutes);
  console.log("✅ userRoutes loaded");
} catch (err) {
  console.error("❌ Error loading userRoutes:", err);
}

try {
  const loanRoutes = require('./routes/loanRoutes');
  app.use('/api/loans', loanRoutes);
  console.log("✅ loanRoutes loaded");
} catch (err) {
  console.error("❌ Error loading loanRoutes:", err);
}

try {
  const trustRoutes = require('./routes/trustRoutes');
  app.use('/api/trust', trustRoutes);
  console.log("✅ trustRoutes loaded");
} catch (err) {
  console.error("❌ Error loading trustRoutes:", err);
}

try {
  const blockchainRoutes = require('./routes/blockchainRoutes');
  app.use('/api/ledger', blockchainRoutes);
  console.log("✅ blockchainRoutes loaded");
} catch (err) {
  console.error("❌ Error loading blockchainRoutes:", err);
}

try {
  const whatsappRoutes = require('./routes/whatsappRoutes');
  app.use('/api/whatsapp', whatsappRoutes);
  console.log("✅ whatsappRoutes loaded");
} catch (err) {
  console.error("❌ Error loading whatsappRoutes:", err);
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
