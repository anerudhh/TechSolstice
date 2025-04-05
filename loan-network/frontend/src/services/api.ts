import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const requestLoan = async (loanData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/loans/request`, loanData);
        return response.data;
    } catch (error) {
        throw new Error('Error requesting loan: ' + error.message);
    }
};

export const trackRepayment = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/loans/repayment/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error tracking repayment: ' + error.message);
    }
};

export const getTrustScore = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trust-score/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error retrieving trust score: ' + error.message);
    }
};

export const submitLoanRequest = async (data: { amount: number; reason: string }) => {
  // Mock API call
  console.log("Submitting loan request:", data);
  return { success: true };
};

export const fetchTrustScore = async () => {
  // Mock API call
  return { trustScore: 85 };
};