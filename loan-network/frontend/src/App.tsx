import React from 'react';
import LoanRequestForm from './components/LoanRequestForm';
import LoanRepaymentTracker from './components/LoanRepaymentTracker';
import TrustScoreDashboard from './components/TrustScoreDashboard';
import LenderIncentives from './components/LenderIncentives';
import './assets/styles.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Decentralized Emergency Loan Platform</h1>
      <LoanRequestForm />
      <LoanRepaymentTracker />
      <TrustScoreDashboard />
      <LenderIncentives />
    </div>
  );
};

export default App;