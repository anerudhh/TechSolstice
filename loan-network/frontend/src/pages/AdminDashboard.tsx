import React, { useEffect, useState } from 'react';
import { fetchLoans, fetchUsers, fetchTrustScores } from '../services/api';
import LoanList from '../components/LoanList';
import UserList from '../components/UserList';
import TrustScoreList from '../components/TrustScoreList';

const AdminDashboard: React.FC = () => {
    const [loans, setLoans] = useState([]);
    const [users, setUsers] = useState([]);
    const [trustScores, setTrustScores] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const loansData = await fetchLoans();
            const usersData = await fetchUsers();
            const trustScoresData = await fetchTrustScores();

            setLoans(loansData);
            setUsers(usersData);
            setTrustScores(trustScoresData);
        };

        loadData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Loan Requests</h2>
                <LoanList loans={loans} />
            </section>
            <section>
                <h2>Users</h2>
                <UserList users={users} />
            </section>
            <section>
                <h2>Trust Scores</h2>
                <TrustScoreList trustScores={trustScores} />
            </section>
        </div>
    );
};

export default AdminDashboard;