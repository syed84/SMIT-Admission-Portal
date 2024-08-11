import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllQuizzes = async () => {
    return await axios.get(`${API_URL}/quizzes`);
};

export const createQuiz = async (quizData) => {
    return await axios.post(`${API_URL}/quizzes`, quizData);
};

export const updateQuiz = async (quizId, quizData) => {
    return await axios.put(`${API_URL}/quizzes/${quizId}`, quizData);
};

export const deleteQuiz = async (quizId) => {
    return await axios.delete(`${API_URL}/quizzes/${quizId}`);
};
