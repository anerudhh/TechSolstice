import React from 'react';
import LoanRequestForm from '../components/LoanRequestForm';

const LoanRequestPage: React.FC = () => {
    return (
        <div className="loan-request-page">
            <h1>Request a Loan</h1>
            <p>Please fill out the form below to request a loan. We will review your request and get back to you shortly.</p>
            <LoanRequestForm />
        </div>
    );
};

export default LoanRequestPage;