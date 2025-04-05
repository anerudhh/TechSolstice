import React from 'react';
import LoanRequestForm from '../components/LoanRequestForm';
import LoanRepaymentTracker from '../components/LoanRepaymentTracker';
import TrustScoreDashboard from '../components/TrustScoreDashboard';
import LenderIncentives from '../components/LenderIncentives';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Decentralized Emergency Loan Network</h1>
            <p>Empowering underserved communities through peer-to-peer lending.</p>
            <section>
                <h2>Request a Loan</h2>
                <LoanRequestForm />
            </section>
            <section>
                <h2>Your Loan Repayment Status</h2>
                <LoanRepaymentTracker />
            </section>
            <section>
                <h2>Your Trust Score</h2>
                <TrustScoreDashboard />
            </section>
            <section>
                <h2>Lender Incentives</h2>
                <LenderIncentives />
            </section>
        </div>
    );
};

export default HomePage;