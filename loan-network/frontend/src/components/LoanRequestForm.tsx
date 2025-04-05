import React, { useState } from 'react';
import { submitLoanRequest } from '../services/api';

const LoanRequestForm: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await submitLoanRequest({ amount, reason });
            if (response.success) {
                setMessage('Loan request submitted successfully!');
            } else {
                setMessage('Failed to submit loan request. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Request a Loan</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loanAmount">Loan Amount:</label>
                    <input
                        type="number"
                        id="loanAmount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="loanPurpose">Reason for Loan:</label>
                    <textarea
                        id="loanPurpose"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoanRequestForm;