import React, { useEffect, useState } from 'react';
import { fetchLoanRepayments } from '../services/api';

const LoanRepaymentTracker: React.FC = () => {
    const [repayments, setRepayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRepayments = async () => {
            try {
                const data = await fetchLoanRepayments();
                setRepayments(data);
            } catch (err) {
                setError('Failed to fetch repayment data');
            } finally {
                setLoading(false);
            }
        };

        getRepayments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Loan Repayment Tracker</h2>
            <ul>
                {repayments.map((repayment) => (
                    <li key={repayment.id}>
                        Loan ID: {repayment.loanId}, Amount: {repayment.amount}, Status: {repayment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoanRepaymentTracker;