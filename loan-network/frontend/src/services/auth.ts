import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend API URL

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const verifyOTP = async (otp) => {
    try {
        const response = await axios.post(`${API_URL}/verify-otp`, { otp });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'OTP verification failed');
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`);
    } catch (error) {
        throw new Error(error.response.data.message || 'Logout failed');
    }
};