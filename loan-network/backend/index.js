const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Route imports
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const trustRoutes = require('./routes/trustRoutes');
const blockchainRoutes = require('./routes/blockchainRoutes');
const whatsappRoutes = require('./routes/whatsappRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/trust', trustRoutes);
app.use('/api/ledger', blockchainRoutes);
app.use('/api/whatsapp', whatsappRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('🚀 Loan Network Backend is running');
});

// Port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
